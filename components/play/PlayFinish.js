import React from "react";
import usePlay from "../../hooks/usePlay";
import Box from "../elements/box";
import But from "../elements/But";
import Icon from "../elements/Icon";

export default function PlayFinish() {
  const { replay, home } = usePlay();

  return (
    <Box className="w-full m-auto max-w-lg items-center justify-center flex flex-col min-h-[200px] gap-3">
      <h1 className="text-3xl text-slate-300 font-bold">Finished</h1>
      <But
        green
        className={
          " flex items-center text-2xl  bg-purple-400 px-10 py-2 font-bold ring-[3px] ring-purple-300  "
        }
        onClick={replay}
      >
        Replay
      </But>
      <But
        className=" bg-indigo-400 ring-[3px] ring-indigo-300 px-5 p-1 font-bold text-xl "
        onClick={home}
      >
        Lessons
      </But>
    </Box>
  );
}
