import Image from "next/image";
import React, { useEffect, useRef } from "react";
import usePlay from "../../../hooks/usePlay";
import Aud from "../../elements/Aud";
import Icon from "../../elements/Icon";
import Line from "../../elements/Line";

export default function DiagPlayItem({ data, i }) {
  const { ind, setDone, isPlay, code } = usePlay();
  const au = useRef();

  useEffect(() => {
    au.current?.play();
  }, [ind]);

  const onEnded = () => {
    setDone(true);
  };
  return (
    <div
      className={
        "min-w-[300px] my-0 mx-0 bg-slate-800d bg-transparent p-6 " +
        (data?.voice?.align == "l" && " ring-2d mr-auto ") +
        (data?.voice?.align == "r" && " ring-2d ml-auto ")
      }
    >
      <header className="flex"></header>
      <div className="flex flex-cold gap-3 items-center">
        {data?.img && (
          <Image
            alt="img item"
            className="rounded-lg"
            src={data?.img}
            height={150}
            width={150}
          />
        )}
        <div className="flex flex-col items-start p-2">
          <Line text={data?.trans} type="trans" />
          <Line text={data?.text} type="text" />
          <Line text={data?.latin} type="latin" />
        </div>
      </div>
      <div
        className={
          "py-3 flex ring-1d items-end " +
          (data?.voice?.align?.trim() == "r" && " justify-end ") +
          (data?.voice?.align?.trim() == "l" && " justify-start ")
        }
      >
        <div className="flex gap-2">
          <Icon onClick={setDone}>check</Icon>
          <Aud
            className=" my-2"
            autoPlay={isPlay}
            src={data?.aud}
            onEnded={onEnded}
          />
        </div>
        {/* {data?.voice?.align !== "c" && getAvatar(data, code) && (
          <Image
            alt={data?.voice?.name}
            className="rounded-lg"
            src={getAvatar(data, code)}
            height={100}
            width={110}
          />
        )} */}
      </div>
    </div>
  );
}
