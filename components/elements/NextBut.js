import React from "react";
import usePlay from "../../hooks/usePlay";
import But from "./But";

export default function NextBut() {
  const { done, next } = usePlay();

  const onClickHandler = () => {
    // new Audio("/audio/error.wav")?.play();
    next();
  };
  return (
    <div className="ring-1d flex flex-col items-center py-5 w-full min-h-[100px]">
      {done && (
        <But
          greend
          className=" max-w-md w-full  text-2xl p-2 px-6 bg-secondary-light text-white font-bold ring-0 "
          onClick={onClickHandler}
        >
          Next
        </But>
      )}
    </div>
  );
}
