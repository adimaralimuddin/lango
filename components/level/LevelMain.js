import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import useLang from "../../hooks/useLang";
import useLevel from "../../hooks/useLevel";
import ButBack from "../elements/ButBack";
import MainHeader from "../main/MainHeader";
import useMain from "../main/MainStore";
import LevelItem from "./LevelItem";
export default function LevelMain() {
  const { listenLevels, levels, clearLevel } = useLevel();
  const { lang } = useMain();

  useEffect(() => {
    const ret = listenLevels(lang);
    return ret;
  }, [lang]);

  return (
    <div className="">
      {/* <MainHeader /> */}
      <div className="flex gap-2 ring-1 ">
        <div className="flex-1 max-w-[250px] bg-red-400d p-8 h-screen sticky top-0 py-1d border-r-2 ">
          <div className="flex gap-3 pb-6">
            {/* <ButBack caller={clearLevel}>lang</ButBack> */}
            <Link href="/">
              <h1 className="text-3xl font-bold text-secondary-lightd text-lime-500">
                Bhasha
              </h1>
            </Link>
          </div>
          <Header />
          {/* <h1 className="text-base font-semibold">CLASS: 5</h1> */}
          {/* <h3 className="text-base font-semibold">Levels: 5</h3> */}
          {/* <h3 className="text-base font-semibold">LESSONS: 25</h3> */}
        </div>
        <div className=" container mx-auto dring-1 p-3 py-8 flex-1 flex flex-col flex-wrap gap-6 max-w-xl  dw-full">
          {levels
            ?.sort((a, b) => a?.num - b?.num)
            ?.map((level) => (
              <LevelItem data={level} key={level?.id} />
            ))}
        </div>
      </div>
    </div>
  );
}

const Header = () => {
  const { curLang } = useLang();
  const lang = curLang();

  console.log("lang");

  return (
    <span className="flex gap-2 items-center pb-4">
      <Image
        className="rounded-lg"
        src={lang?.img}
        width={40}
        height={20}
        alt=""
      />
      <h1 className="text-lg font-bold">{lang?.name}</h1>
    </span>
  );
};
