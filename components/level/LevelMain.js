import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import useLang from "../../hooks/useLang";
import useLevel from "../../hooks/useLevel";

import { motion } from "framer-motion";
import { ThemeButton } from "../../hooks/useTheming";
import HeaderDiv from "../elements/HeaderDiv";
import Logo from "../elements/Logo";
import { SiteMap } from "../main/MainHeader";
import LevelItem from "./LevelItem";

export default function LevelMain() {
  const { set } = useLang();
  const { listenLevels, levels, clearLevel } = useLevel();
  const {
    query: { lang },
  } = useRouter();

  useEffect(() => {
    if (lang) {
      set({ langId: lang });
    }
    const ret = listenLevels(lang);
    return ret;
  }, [lang]);
  return (
    <div className="dark:bg-back-second">
      <Header />
      <div className="flex gap-2 ">
        <SideBar />
        <div className=" container mx-auto dring-1 p-3 py-8 flex-1 flex flex-col flex-wrap gap-6 max-w-xl  dw-full min-h-[200vh]">
          {levels
            ?.sort((a, b) => a?.num - b?.num)
            ?.map((level) => (
              <div key={level?.id}>
                <LevelItem data={level} key={level?.id} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

const Header = ({}) => {
  const { curLang } = useLang();
  const lang = curLang();

  return (
    <HeaderDiv className="bg-white dark:bg-back-main sticky top-0 z-10 bg-greend-400">
      <Logo />
      <SiteMap />
      <div className="flex items-center gap-3">
        <Image
          className="rounded-lg"
          src={lang?.img}
          width={40}
          height={20}
          alt=""
        />
        <h1 className="text-lg font-bold">{lang?.name}</h1>
      </div>
      <ThemeButton />
    </HeaderDiv>
  );
};

const SideBar = () => {
  return (
    <aside className="flex-1 max-w-[250px] bg-red-400d p-8 h-screen sticky top-[70px] py-1d border-r-2 text-2xl font-bold dark:border-slate-500">
      <p className=" ">CLASS: 5</p>
      <p className=" ">Levels: 5</p>
      <p className=" ">LESSONS: 25</p>
    </aside>
  );
};
