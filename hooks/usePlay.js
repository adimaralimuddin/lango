import { orderBy, where } from "firebase/firestore";
import { useRouter } from "next/router";
import create from "zustand";
import { getDb, listenColWhere } from "./useDb";

const store_ = create((set) => ({
  set,
  ind: 0,
  isPlay: false,
  finish: false,
  done: false,
  items: [],
}));

export default function usePlay() {
  const store = store_();
  const { set, ind, items, isPlay, lessonData } = store;
  const router = useRouter();

  //item
  const item = (ind_ = ind) => items?.[ind_];

  //getLangs
  function listenItems(lesson) {
    if (!lesson && lesson != "") return;
    initData(lesson);
    return listenColWhere(
      "items",
      (items) => set({ items }),
      where("lesson", "==", lesson),
      orderBy("timestamp", "asc")
    );
  } // listenItems

  async function initData(lessonId) {
    const lessonData = await getDb("lessons", lessonId);
    set({ lessonData });
    const langData = await getDb("langs", lessonData?.langId);
    set({ langData, code: langData?.code });
  }

  function next() {
    set((p) => {
      if (p?.ind >= items?.length - 1) {
        new Audio("/audio/success.wav")?.play();
        return { finish: true, done: false };
      } else {
        return { ind: p?.ind + 1, done: false };
      }
    });
  } //next

  function play() {
    new Audio("/audio/error.wav")?.play();
    set({ isPlay: true, finish: false });
  }

  function stop() {
    set({ isPlay: false, finish: false, done: false, ind: 0 });
  }

  function edit() {
    new Audio("/audio/error.wav")?.play();
    set({ isPlay: false, finish: false });
  }

  function toglePlay() {
    new Audio("/audio/error.wav")?.play();
    if (isPlay) {
      edit();
    } else {
      play();
    }
  }

  function setDone(val = true) {
    set({ done: val });
  }

  function replay() {
    new Audio("/audio/error.wav")?.play();
    set({ isPlay: true, finish: false, done: false, ind: 0 });
  }

  function restore() {
    set({ items: [], isPlay: false, finish: false, done: false, ind: 0 });
  }

  function home() {
    new Audio("/audio/error.wav")?.play();
    restore();
    const url = new URL(location?.href);
    var sp = url.searchParams;
    sp.set("tab", "levels");
    sp.set("lang", lessonData.langId);
    sp.set("level", lessonData.levelId);
    set({ tab: "level" });
    // router.push("/?" + sp?.toString());
    router.back();
  }

  return {
    ...store,
    item,
    listenItems,
    play,
    stop,
    toglePlay,
    next,
    setDone,
    replay,
    restore,
    home,
  };
}
