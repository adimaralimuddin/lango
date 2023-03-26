import React, { useEffect } from "react";
import useLang from "../../hooks/useLang";
import MainHero from "../main/MainHero";
import LangItem from "./LangItem";
export default function LangMain() {
  const { listenLangs, langs } = useLang();

  useEffect(() => {
    const ret = listenLangs();
    return ret;
  }, []);

  return (
    <div className="flex flex-col ">
      <MainHero />
      <div id="languages" className=" p-6 pt-12">
        <h1 className="text-center font-bold text-3xl ">Select Languages!</h1>
      </div>
      <div className="flex-1 justify-center items-center grid grid-cols-2 gap-6 md:grid-cols-4 container max-w-5xl  mx-auto p-6 dmin-h-[500px]">
        {langs?.map((lang) => (
          <LangItem data={lang} key={lang?.id} />
        ))}
      </div>
      <div className="min-h-[300px]"></div>
    </div>
  );
}
