import Image from "next/image";
import React, { useEffect, useRef } from "react";
import usePlay from "../../../hooks/usePlay";
import Aud from "../../elements/Aud";
import Box from "../../elements/box";
import Icon from "../../elements/Icon";
import Line from "../../elements/Line";
import { getAvatar } from "../../../hooks/trans";

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
    <Box
      className={
        "min-w-[300px] my-0 mx-0 bg-slate-800d bg-transparent p-6 " +
        (data?.voice?.align == "l" && " ring-2d mr-auto ") +
        (data?.voice?.align == "r" && " ring-2d ml-auto ")
      }
    >
      <header className="flex"></header>
      <div className="flex flex-col items-center">
        {data?.img && (
          <Image
            alt="img item"
            className="rounded-lg"
            src={data?.img}
            height={250}
            width={250}
          />
        )}
        <Aud
          className=" my-2"
          autoPlay={isPlay}
          src={data?.aud}
          onEnded={onEnded}
        />
        <Line text={data?.trans} type="trans" />
        <Line text={data?.text} type="text" />
        <Line text={data?.latin} type="latin" />
      </div>
      <div
        className={
          "py-3 flex ring-1d items-end " +
          (data?.voice?.align?.trim() == "r" && " justify-end ") +
          (data?.voice?.align?.trim() == "l" && " justify-start ")
        }
      >
        <Icon onClick={setDone}>check</Icon>
        {data?.voice?.align !== "c" && (
          <Image
            alt={data?.voice?.name}
            className="rounded-lg"
            src={getAvatar(data, code)}
            height={100}
            width={110}
          />
        )}
      </div>
    </Box>
  );
}
