import React, { useState } from "react";
import usePlay from "../../hooks/usePlay";
import Absol from "../elements/Absol";
import But from "../elements/But";
import ItemEditor from "./item/ItemEditor";
import ItemView from "./item/ItemView";
import PlayAdder from "./PlayAdder";

export default function PlayEditor() {
  const { items, toglePlay, isPlay, replay } = usePlay();
  const [min, setMin] = useState(false);
  const [minAdder, setMinAdder] = useState(false);

  if (min) {
    return (
      <div className="fixed top-1 right-1">
        <But
          green
          className="absolute top-2 right-2"
          onClick={() => setMin(false)}
        >
          max
        </But>
      </div>
    );
  }

  return (
    <div className="flex justify-between flex-1 ring-2d bg-black">
      {!isPlay && (
        <div className="flex flex-col flex-[1] py-6">
          <div className="overflow-y-auto bg-red-600f flex-1 flex flex-col items-center py-5 gap-5">
            {items?.map((item, ind) => (
              <ItemView item={item} ind={ind} key={item?.id} />
            ))}
          </div>
        </div>
      )}
      <div
        style={{ width: minAdder ? "100px" : "auto" }}
        className="flex-1 bg-red-600d flex flex-col bg-green-500"
      >
        <div className="bg-slate-900 p-1">
          <But onClick={toglePlay}>{isPlay ? "edit" : "play"}</But>
          <But onClick={replay}>replay</But>
          <But onClick={() => setMin((p) => !p)}>min</But>
          <But onClick={() => setMinAdder((p) => !p)}>min adder</But>
        </div>
        <div className="overflow-y-auto flex flex-col gap-4 py-5 flex-1 bg-gray-900">
          {items?.map((item, i) => (
            <ItemEditor data={item} key={item?.id} i={i} />
          ))}
        </div>
        <PlayAdder />
      </div>
    </div>
  );
}
