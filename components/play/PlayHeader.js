import React from "react";
import usePlay from "../../hooks/usePlay";
import HomeBut from "../elements/HomeBut";
import Icon from "../elements/Icon";
import Img from "../elements/Img";

export default function PlayHeader() {
  const { stop, replay, items, ind, home, langData, lessonData, isPlay } =
    usePlay();
  return (
    <div className="flex justify-between flex-wrap top-0 left-0 p-2 max-w-3xl mx-auto w-full ">
      <div className="flex items-center flex-wrap">
        <HomeBut />
        {isPlay && <Icon onClick={replay}>refresh</Icon>}
        {isPlay && <Icon onClick={stop}>circle-stop</Icon>}
        {isPlay && (
          <p className="text-slate-300 px-3">
            lesson - {lessonData?.num} - {lessonData?.name}
          </p>
        )}
      </div>
      <p className="text-pink-300 font-bold flex items-center">
        {ind + 1} / {items?.length}
      </p>
      <div
        onClick={home}
        className="flex gap-2 text-purple-300 hover:text-purple-200 cursor-pointer"
      >
        <h1 className="text-xl font-bold ">{langData?.name}</h1>
        <Img src={langData?.img} h={30} w={50} />
      </div>
    </div>
  );
}
