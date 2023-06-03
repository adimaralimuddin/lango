import { useRouter } from "next/router";
import React, { useEffect } from "react";
import usePlay from "../../hooks/usePlay";
import NextBut from "../elements/NextBut";
import PlayFinish from "./PlayFinish";
import PlayHeader from "./PlayHeader";
import ItemPlay from "./item/ItemPlay";

export default function PlayMain() {
  const router = useRouter();
  const { lang, level, lesson } = router.query;
  const { play, set, item, listenItems, isPlay, finish, lessonData } =
    usePlay();

  useEffect(() => {
    const ret = listenItems(lesson);
    set({ lang, level, lesson });
    return ret;
  }, [router.query]);

  return (
    <div className="flex flex-col max-h-screen h-screen min-h-screen dark:bg-back-second ">
      <PlayHeader />
      {finish && <PlayFinish />}
      {isPlay && (
        <div className="flex flex-col items-center p-5 bg-green-400d flex-1">
          {!finish && (
            <div
              // style={{ backgroundImage: "url('/images/bg.jpg')" }}
              className="w-full max-w-2xl flex-1 flex flex-col items-center justify-center  bg-cover bg-center "
            >
              <ItemPlay item={item()} />
            </div>
          )}
          <NextBut />
        </div>
      )}

      {!isPlay && (
        <div className="flex-1 flex flex-col items-center justify-center">
          <h3 className="text-slate-500 dark:text-slate-200 text-xl font-semibold">
            LESSON {lessonData?.num}
          </h3>
          <h1 className="text-4xl font-extrabold text-primary-light dark:text-pink-300">
            {lessonData?.name}
          </h1>
          <h2 className="text-slate-500 dark:text-slate-300 py-1">
            {lessonData?.desc}
          </h2>
          <button
            onClick={play}
            className=" my-3 hover:scale-105 transition-all duration-200 bg-primary-light text-white rounded-2xl px-12 py-3 font-bold text-3xl"
          >
            <i className="fa-solid fa-play"></i> PLAY
          </button>
        </div>
      )}
    </div>
  );
}
