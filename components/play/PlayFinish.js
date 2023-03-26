import React from "react";
import usePlay from "../../hooks/usePlay";
import Box from "../elements/Box";
import But from "../elements/But";

export default function PlayFinish() {
  const { replay, home } = usePlay();

  return (
    <div className="flex-1 m-auto flex flex-col items-center justify-center gap-3">
      <h1 className="text-4xl text-indigo-400 font-bold ">Finished!</h1>
      <But
        green
        className={
          " flex items-center text-2xl  bg-secondary-light text-white px-10 py-2 font-bold ring-[3px]d dring-purple-300  "
        }
        onClick={replay}
      >
        Replay
      </But>
      <But
        className=" bg-indigo-400 ring-[3px] text-white ring-indigo-300 px-5 p-1 font-bold text-xl "
        onClick={home}
      >
        Lessons
      </But>
    </div>
  );
}
