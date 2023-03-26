import React, { useEffect, useRef, useState } from "react";
import But from "./But";
import Icon from "./Icon";

export default function Aud({
  src,
  className,
  onEnded,
  autoPlay = false,
  play_,
  playable = true,
  ...props
}) {
  const au = useRef();
  const [play, setPlay] = useState(false);

  useEffect(() => {
    if (autoPlay) {
      au.current.currentTime = 0;
      au.current?.play();
    }
  }, [src]);

  const onClick = () => {
    if (!src || !playable) {
      console.log("no audio");
      return;
    }
    if (au?.current?.paused) {
      au.current.currentTime = 0;
      au.current?.play();
      setPlay(true);
    } else {
      au.current?.pause();
      setPlay(false);
    }
  };

  const onEndedHandler = (e) => {
    setPlay(false);
    onEnded?.(e);
  };

  return (
    <div
      {...props}
      className={
        " flex-1 py-1  fa-solidd  px-2 flex items-center justify-center rounded-full m-[1px] hover:scale-110 cursor-pointer " +
        (!src && " bg-red-500 ") +
        (!playable && " cursor-default ") +
        className
      }
      onClick={onClick}
    >
      {play ? (
        <i class="fa-solid fa-volume-high text-green-400"></i>
      ) : (
        <i class="fa-solid fa-volume-high text-slate-400"></i>
      )}
      <audio {...props} onEnded={onEndedHandler} src={src} ref={au} />
    </div>
  );
}
