import create from "zustand";
import useMain from "../components/main/MainStore";
import { addDb, addFile, listenCol, updateDb } from "./useDb";

const store_ = create((set) => ({
  langs: [],
  set,
}));

export default function useLang() {
  const store = store_();
  const { lang } = useMain();
  const { set, langs } = store;


  //getLangs
  function listenLangs() {
    return listenCol("langs", (langs) => set({ langs }));
  }

  // add lang
  async function addLang({ img, ...data }) {
    const d = await addDb("langs", data);
    const url = await addFile("langs", d?.id, img?.file);
    await updateDb("langs", d?.id, { img: url });
  }

  async function updateLang({ img, ...data }, prev) {
    await updateDb("langs", prev?.id, data);
    if (img?.file) {
      const url = await addFile("langs", prev?.id, img?.file);
      await updateDb("langs", prev?.id, { img: url });
    }
  }

  function curLang() {
    return langs?.find((l) => l?.id == lang);
  }

  return {
    ...store,
    listenLangs,
    addLang,
    updateLang,
    curLang,
  };
}
