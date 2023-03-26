import Image from "next/image";
import React, { useEffect, useState } from "react";
import useLesson from "../../hooks/useLesson";
import Box from "../elements/Box";
import Indexer from "../elements/Indexer";
import LessonItem from "../lesson/LessonItem";
import { default as useMain, default as useStore } from "../main/MainStore";
export default function LevelItem({ data }) {
  const { listenlessons, clearLessons } = useLesson();
  const { set, level } = useMain();
  const { setTab } = useStore();
  const [lessons, setSessons] = useState([]);

  // console.log("data ", data);

  useEffect(() => {
    const ret = listenlessons(data?.id, setSessons);
    return ret;
  }, [data?.id]);

  const onClickHandler = () => {
    setTab("lessons", "level", data?.id);
  };

  const runy = () => {
    let alt = true;
    let count = 1;

    let ret = lessons?.map((l) => {
      return l;
    });

    return ret;
  };

  console.log("runny", runy());
  return (
    <div>
      <div
        className="bg-secondary-light flex gap-6 text-white p-6 rounded-3xl"
        onClick={onClickHandler}
      >
        <Image src="/images/castle.png" width={40} height={30} />
        <div>
          <h1 className="font-bold text-lg">{data?.level}</h1>
          <h2 className="text-xl ">{data?.name}</h2>
        </div>
      </div>
      <div className="flex flex-col items-center gap-6 p-6">
        {/* <div>
          <LessonItem data={lessons?.[0]} />
        </div>
        <div className="flex gap-12">
          <LessonItem data={lessons?.[1]} />
          <LessonItem data={lessons?.[2]} />
        </div>
        <div className="flex gap-12">
          <LessonItem data={lessons?.[3]} />
          <LessonItem data={lessons?.[2]} />
          <LessonItem data={lessons?.[1]} />
        </div>
        <div className="flex gap-12">
          <LessonItem data={lessons?.[1]} />
          <LessonItem data={lessons?.[2]} />
        </div> */}
        <div className="flex flex-wrap gap-4 items-center justify-center">
          {lessons
            ?.sort((a, b) => a?.num - b?.num)
            ?.map((lang) => (
              <LessonItem data={lang} key={lang?.id} />
            ))}
        </div>
      </div>
    </div>
  );
}
