import Image from "next/image";
import React, { useState } from "react";
import { getLang } from "../../hooks/trans";
import usePlay from "../../hooks/usePlay";

export default function PlayVoiceEditor({ voice, onInput }) {
  const { code } = usePlay();
  const [selVoice, setVoice] = useState(voice);

  function voices() {
    return getLang(code)?.voices;
  }

  //   function initialVoice() {
  //     if (data?.voice) {
  //       onInput(data?.voice);
  //       return data?.voice;
  //     } else {
  //       const v = voices()?.find((v) => v?.align == "c");
  //       onInput(v);
  //       return v;
  //     }
  //   }

  const onInputHandler = (voice) => {
    setVoice(voice);
    onInput?.(voice);
  };
  return (
    <div className="flex items-center gap-2">
      {voices()?.map((voice_) => (
        <div
          className={"ring-2d rounded-md p-1 overflow-hidden cursor-pointer "}
          onClick={() => onInputHandler(voice_)}
          key={voice_.val}
        >
          <Image
            alt={voice_?.align}
            className={
              " rounded-lg ring-2 " +
              (selVoice == voice_ && " ring-pink-400 ") +
              (voice_?.align == "c" && " bg-pink-700 ")
            }
            src={`/avatars/${code}/${voice_?.val?.trim()}.png`}
            width={50}
            height={60}
          />
          <div
            className={
              "flex flex-col text-center text-sm text-slate-400 leading-3 " +
              (voice_?.hd && " text-green-600 ")
            }
          >
            <small>{voice_?.name}</small>
            <small>{voice_?.align}</small>
          </div>
        </div>
      ))}
    </div>
  );
}
