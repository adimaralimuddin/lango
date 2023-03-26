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
    <div
      onClick={onClickHandler}
      className="flex flex-col bg-orange-50 ring-2 ring-white justify-center items-center w-full max-w-[190px] mx-auto cursor-pointer shadow-md p-3 rounded-2xl hover:shadow-xl"
    >
      {data?.img && (
        <div className="relative min-h-[70px] flex-1 ">
          <Image
            alt={data?.name + " image"}
            className=" rounded-xl "
            src={data?.img}
            width={100}
            height={70}
          />
        </div>
      )}
      <p className="text-[1rem] text-center p-1 font-medium ">{data?.name}</p>
    </div>
  );
}
