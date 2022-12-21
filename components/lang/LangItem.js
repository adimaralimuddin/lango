import Image from "next/image";
import React from "react";
import Box from "../elements/Box";
import useStore from "../main/MainStore";

export default function LangItem({ data }) {
  const { set, setTab } = useStore();

  const onClickHandler = () => {
    setTab("levels", "lang", data?.id);
    set({ tab: "levels", lang: data?.id });
  };
  return (
    <Box className="w-full max-w-[180px]">
      <div
        className="flex flex-col items-center justify-center cursor-pointer"
        onClick={onClickHandler}
      >
        {data?.img && (
          <div className="relative h-[60px] w-[90px] ">
            <Image
              alt={data?.name + " image"}
              className=" rounded-xl "
              src={data?.img}
              layout="fill"
              objectFit="fit"
            />
          </div>
        )}
        <p className="text-purple-200">{data?.name}</p>
        <div className="flex gap-2 text-slate-400">
          <small>{data?.code}</small>
          <small>{data?.audCode}</small>
        </div>
      </div>
    </Box>
  );
}
