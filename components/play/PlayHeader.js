import React from "react";
import usePlay from "../../hooks/usePlay";
import HomeBut from "../elements/HomeBut";
import Icon from "../elements/Icon";

export default function PlayHeader() {
  const { play, replay, items, ind } = usePlay();
  return (
    <div className="fixed top-0 left-0 p-1  flex ">
      <div className="flex">
        <HomeBut />
        <Icon onClick={play}>play</Icon>
        <Icon onClick={replay}>refresh</Icon>
      </div>
      <p className="text-pink-300 font-bold flex items-center">
        {ind + 1} / {items?.length}
      </p>
    </div>
  );
}
