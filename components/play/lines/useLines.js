import { orderBy, query, where } from "firebase/firestore";
import { speak, translate, transText } from "../../../hooks/trans";
import usePlay from "../../../hooks/usePlay";
import {
  addDb,
  addFile,
  deleteFile,
  listenColWhere,
  removeDb,
  updateDb,
  updateFileDb,
} from "../../../hooks/useDb";

export default function useLines() {
  const { code } = usePlay();
  async function addLines({ ...data }) {
    console.log(data);
    const d = await addDb("items", data);
    return d;
  } //add diag

  async function updateLines({ id, ...data }) {
    console.log(data);
    await updateDb("items", id, data);
  }

  function listenLines(linesId, setter) {
    return listenColWhere("lines", setter, where("lines", "==", linesId));
  }

  async function addLine({ img, aud, ...data }, caller) {
    const text = data?.text;
    for (let i in data) {
      if (data[i] == undefined) {
        alert(`undefined line property ${i} = `, data[i]);
        return;
      }
    }
    const d = await addDb("lines", data);
    caller?.(d);

    const { trans, latin } = await translate({ text, to: code });
    data.trans = trans;
    updateDb("lines", d?.id, { trans, latin });

    if (data?.trans) {
      const aud = await speak(data, code, d);
      if (aud) {
        updateDb("lines", d?.id, { aud });
      }
    }

    updateFileDb("lines", d?.id, img, "lines", d?.id);
    updateFileDb("lines", d?.id, aud, "lines", d?.id, "aud");
  } //add line

  async function updateLine({ id, img, aud, ...data }, prev) {
    await updateDb("lines", id, data);
    transText(data, code, prev);
    updateFileDb("lines", id, img, "lines", id);
    updateFileDb("lines", id, aud, "lines", id, "aud");
  } // update line

  async function deleteLines(data, lines) {
    await removeDb("items", data?.id);
    if (lines) {
      lines?.map((line) => {
        deleteLine(line);
      });
    }
  }

  async function deleteLine({ id, img, aud }) {
    console.log({ id, img, aud });
    removeDb("lines", id);
    if (img) {
      deleteFile(id, "lines");
    }
    if (aud) {
      deleteFile(id, "lines", "aud");
    }
  }

  return {
    listenLines,
    addLines,
    addLine,
    updateLines,
    updateLine,
    deleteLines,
    deleteLine,
  };
}
