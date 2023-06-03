import React from "react";
import usePlay from "../../hooks/usePlay";
import { ThemeButton } from "../../hooks/useTheming";
import HomeBut from "../elements/HomeBut";
import Icon from "../elements/Icon";
import Img from "../elements/Img";

export default function PlayHeader() {
  const { stop, replay, items, ind, home, langData, lessonData, isPlay } =
    usePlay();
  return (
    <div className="flex justify-between items-center flex-wrap top-0 left-0 p-2 max-w-3xl mx-auto w-full gap-6">
      <div className="flex items-center flex-wrap ">
        <HomeBut />
        {isPlay && (
          <Icon className={"text-[5rem ] "} onClick={replay}>
            refresh
          </Icon>
        )}
        {isPlay && <Icon onClick={stop}>circle-stop</Icon>}
        {isPlay && (
          <p className="text-[1.2rem] font-semibold text-slate-500 dark:text-slate-300 px-3">
            lesson - {lessonData?.num} - {lessonData?.name}
          </p>
        )}
      </div>
      <p className="text-[1.5rem] text-pink-300 font-extrabold flex flex-1 justify-center items-center whitespace-nowrap ">
        {ind + 1} / {items?.length}
      </p>
      <div
        onClick={home}
        className="flex gap-2 text-purple-300 hover:text-purple-200 cursor-pointer "
      >
        {/* <h1 className="text-xl font-bold ">{langData?.name}</h1> */}
        <Img
          className="ring-2 rounded-lg ring-slate-200"
          src={langData?.img}
          h={30}
          w={50}
        />
      </div>
      <ThemeButton />
    </div>
  );
}
