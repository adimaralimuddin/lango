import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Box from "../elements/Box";
import Indexer from "../elements/Indexer";
import useMain from "../main/MainStore";

export default function LessonItem({ data }) {
  const { lang, level } = useMain();
  const { set } = useMain();
  const r = useRouter();
  // console.log("less ", data);
  const onClickHandler = () => {
    // set({ tab: "lessons", lesson: data?.id });
    r.push(`play?lang=${lang}&level=${level}&lesson=${data?.id}`);
  };
  return (
    <div
      className="  rounded-full flex flex-col odd:bg-[#E6FFDD] even:bg-[#F2F3FF] items-center text-center p-3 justify-center   w-[120px] h-[120px] cursor-pointer hover:ring-2 ring-secondary-light"
      onClick={onClickHandler}
    >
      <div className="bg-pink-400d ">
        <Image src="/images/paifang.png" width={40} height={40} />
      </div>
      <p className="text-slate-500 font-medium  leading-4">{data?.name}</p>
    </div>
  );
}
