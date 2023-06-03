import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Box from "../elements/Box";
import useStore from "../main/MainStore";

export default function LangItem({ data }) {
  const { set, setTab } = useStore();
  const router = useRouter();

  const onClickHandler = () => {
    // setTab("levels", "lang", data?.id);
    // set({ tab: "levels", lang: data?.id });
    router.push(`/learn/${data.id}`);
  };
  return (
    <div
      onClick={onClickHandler}
      className="flex flex-col gap-3 bg-orange-50d bg-violet-200 dbg-pink-400 ring-2 ring-violet-500 justify-center items-center w-full max-w-[190px] mx-auto cursor-pointer shadow-md p-6 rounded-2xl hover:shadow-xl hover:scale-105"
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
      <p className="text-slate-800 font-semibold text-[1rem] text-center p-1  ">
        {data?.name?.toUpperCase()}
      </p>
    </div>
  );
}
