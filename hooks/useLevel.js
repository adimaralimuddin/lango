import { where } from "firebase/firestore";
import create from "zustand";
import { addDb, listenColWhere, updateDb } from "./useDb";

const store_ = create((set) => ({
  levels: [],
  set,
}));

export default function useLevel() {
  const store = store_();
  const { set } = store;

  //getlevels
  function listenLevels(lang) {
    if (!lang) return;
    return listenColWhere(
      "levels",
      (levels) => set({ levels }),
      where("langId", "==", lang)
    );
  }

  // add lang
  async function addLevel(data) {
    const d = await addDb("levels", data);
    // const url = await addFile("levels", d?.id, img?.file);
    // await updateDb("levels", d?.id, { img: url });
  }

  async function updateLevel(data, prev) {
    await updateDb("levels", prev?.id, data);
  }

  async function clearLevel() {
    set({ levels: [] });
  }

  return {
    ...store,
    listenLevels,
    addLevel,
    updateLevel,
    clearLevel,
  };
}
