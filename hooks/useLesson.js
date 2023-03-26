import { where } from "firebase/firestore";
import create from "zustand";
import { addDb, addFile, listenColWhere, updateDb } from "./useDb";

const store_ = create((set) => ({
  lessons: [],
  set,
}));

export default function useLesson() {
  const store = store_();
  const { set } = store;

  //getlessons
  function listenlessons(level, setter) {
    if (!level) return;
    return listenColWhere(
      "lessons",
      (lessons) => {
        set({ lessons });
        setter?.(lessons);
      },
      where("levelId", "==", level)
    );
  }

  // add lang
  async function addLesson(data) {
    const d = await addDb("lessons", data);
    // const url = await addFile("lessons", d?.id, img?.file);
    // await updateDb("lessons", d?.id, { img: url });
  }

  async function updateLesson(data, prev) {
    await updateDb("lessons", prev?.id, data);
  }

  function clearLessons() {
    set({ lessons: [] });
  }

  return {
    ...store,
    listenlessons,
    addLesson,
    updateLesson,
    clearLessons,
  };
}
