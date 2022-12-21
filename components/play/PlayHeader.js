import React from "react";
import usePlay from "../../hooks/usePlay";
import HomeBut from "../elements/HomeBut";
import Icon from "../elements/Icon";
import Img from "../elements/Img";

export default function PlayHeader() {
  const { play, replay, items, ind, langData } = usePlay();
  return (
    <div className="flex justify-between top-0 left-0 p-2 ">
      <div className="flex">
        <HomeBut />
        <Icon onClick={play}>play</Icon>
        <Icon onClick={replay}>refresh</Icon>
      </div>
      <p className="text-pink-300 font-bold flex items-center">
        {ind + 1} / {items?.length}
      </p>
      <div className="flex gap-2">
        <h1 className="text-xl font-bold text-purple-300">{langData?.name}</h1>
        <Img src={langData?.img} h={30} w={50} />
      </div>
    </div>
  );
}
