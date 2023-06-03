import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import useMain from "../main/MainStore";

export default function LessonItem({ data, ind }) {
  const { lang, level } = useMain();
  const r = useRouter();
  // console.log("less ", data);
  const onClickHandler = () => {
    r.push(`/play?lang=${lang}&level=${level}&lesson=${data?.id}`);
  };
  return (
    <div
      className={
        "   flex flex-col   items-center text-center p-3  justify-center   w-[150px] h-[150px] cursor-pointer hover:ring-2 ring-secondary-light dark:ring-indigo-400 " +
        (ind === 0
          ? "rounded-3xl bg-secondary-light dark:bg-[#705c9e] "
          : "rounded-full bg-[#F2F0FB] dark:bg-back-third")
      }
      onClick={onClickHandler}
    >
      <div className="bg-pink-400d  ">
        <Image
          src={`/assets/images/${defineImages(ind)}.png`}
          width={54}
          height={54}
          alt=""
        />
      </div>
      <p className=" font-medium  leading-4">{data?.name}</p>
    </div>
  );
}

const defineImages = (i) => {
  switch (i) {
    case 0:
      return "apple";
    case 1:
      return "run";
    case 2:
      return "parcel";
    default:
      return "learn";
  }
};
