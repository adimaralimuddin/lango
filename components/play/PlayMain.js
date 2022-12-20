import { useRouter } from "next/router";
import React, { useEffect } from "react";
import usePlay from "../../hooks/usePlay";
import NextBut from "../elements/NextBut";
import ItemPlay from "./item/ItemPlay";
import PlayEditor from "./PlayEditor";
import PlayFinish from "./PlayFinish";
import HomeBut from "../elements/HomeBut";
import PlayHeader from "./PlayHeader";

export default function PlayMain() {
  const router = useRouter();
  const { lang, level, lesson } = router.query;
  const { set, item, listenItems, isPlay, finish } = usePlay();

  useEffect(() => {
    const ret = listenItems(lesson);
    set({ lang, level, lesson });
    return ret;
  }, [router.query]);

  function test() {
    
  }

  return (
    <div className="flex min-h-screen max-h-screen h-screen">
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

      <PlayEditor />
    </div>
  );
}
