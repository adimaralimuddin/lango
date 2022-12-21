import { useRouter } from "next/router";
import React, { useEffect } from "react";
import usePlay from "../../hooks/usePlay";
import NextBut from "../elements/NextBut";
import ItemPlay from "./item/ItemPlay";
import PlayFinish from "./PlayFinish";
import PlayHeader from "./PlayHeader";

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
    <div className="flex flex-col max-h-screen h-screen min-h-screen">
      <PlayHeader />
      {finish && <PlayFinish />}
      {isPlay && (
        <div className="flex flex-col items-center p-5 bg-green-400d flex-1">
          {!finish && (
            <div className="w-full max-w-2xl flex-1 flex flex-col items-center justify-center bg-red-400d  ">
              <ItemPlay item={item()} />
            </div>
          )}
          <NextBut />
        </div>
      )}

      {!isPlay && (
        <div className="flex-1 flex flex-col items-center justify-center">
          <p>LESSON {lessonData?.num}</p>
          <h1 className="text-4xl font-bold text-purple-200">
            {lessonData?.name}
          </h1>
          <h2>{lessonData?.desc}</h2>
          <button
            onClick={play}
            className=" my-3 dark:bg-purple-300 rounded-2xl px-6 py-2 font-bold text-3xl"
          >
            PLAY
          </button>
        </div>
      )}
    </div>
  );
}
