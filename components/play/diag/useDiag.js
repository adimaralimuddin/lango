import { speak, translate, transText } from "../../../hooks/trans";
import { addDb, updateDb, updateFileDb } from "../../../hooks/useDb";
import usePlay from "../../../hooks/usePlay";

export default function useDiag() {
  const { code } = usePlay();

  async function addDiag({ img, aud, ...data }, caller) {
    console.log("add diag ", data);
    const text = data?.text;
    const d = await addDb("items", data);
    caller?.(d);

    // add diag img
    if (!data?.trans) {
      const { trans, latin } = await translate({ text, to: code });
      data.trans = trans;
      updateDb("items", d?.id, { trans, latin });
    }

    // add diag aud
    if (data?.trans) {
      updateAudio(data, code, d);
    }

    updateFileDb("diag", d?.id, img, "items", d?.id);
    updateFileDb("diag", d?.id, aud, "items", d?.id, "aud");
    // return d;
  } //add diag

  async function updateAudio(data, code, prev) {
    if (!data?.trans) return alert("no trans found =" + trans);
    const aud = await speak(data, code, prev);
    if (aud) {
      updateDb("items", prev?.id, { aud });
    }
  }

  async function updateDiag({ img, aud, ...data }, prev) {
    await updateDb("items", data?.id, data);
    transText(data, code, prev);
    updateFileDb("diag", data?.id, img, "items", data?.id);
    updateFileDb("diag", data?.id, aud, "items", data?.id, "aud");
  }

  return { addDiag, updateDiag };
}
