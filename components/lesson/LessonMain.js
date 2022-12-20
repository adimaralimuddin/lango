import React, { useEffect } from "react";
import useLesson from "../../hooks/useLesson";
import ButBack from "../elements/ButBack";
import LessonAdder from "./LessonAdder";
import LessonItem from "./LessonItem";
import useMain from "../main/MainStore";

export default function LessonMain() {
  const { lessons, listenlessons, clearLessons } = useLesson();
  const { set, level } = useMain();

  useEffect(() => {
    const ret = listenlessons(level);
    return ret;
  }, [level]);

  const onBack = () => {
    if (lessons?.[0]?.levelId) {
      set({ lang: lessons?.[0]?.langId, tab: "levels" });
      clearLessons();
    }
  };

  return (
    <div className="flex-1 flex flex-col items-center">
      <div className="flex gap-3 p-3 w-full max-w-xl">
        <ButBack caller={onBack}>levels</ButBack>
        <LessonAdder />
      </div>
      <div className="flex flex-col w-full max-w-xl p-3 gap-3">
        <h1>Lessons</h1>
        {lessons
          ?.sort((a, b) => a?.num - b?.num)
          ?.map((lang) => (
            <LessonItem data={lang} key={lang?.id} />
          ))}
      </div>
    </div>
  );
}
