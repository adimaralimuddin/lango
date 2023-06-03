import React from "react";
import MainDesc from "../main/MainDesc";
import MainFooter from "../main/MainFooter";
import MainHero from "../main/MainHero";
import LangItem from "./LangItem";
export default function LangMain({ languages }) {
  return (
    <div className="flex flex-col ">
      <MainHero />
      {/* <MainDesc /> */}
      <SelectLanguages languages={languages} />
      <MainFooter />
    </div>
  );
}

function SelectLanguages({ languages }) {
  return (
    <div className=" bg-pink-400d bg-back-second p-3 py-6d  min-h-[100vh] flex flex-col text-white justify-center items-center gap-4">
      <header id="languages" className=" ring-1d py-10">
        <h1 className="text-center font-extrabold text-[2.2rem] py-1">
          Select a Language
        </h1>
        <h1 className="text-center font-bold text-2xl ">And Start learning!</h1>
      </header>
      <main className="flex-1d justify-center items-center grid grid-cols-2 gap-6 md:grid-cols-4 container max-w-5xl  mx-auto p-6 dmin-h-[500px]">
        {languages?.map((lang) => (
          <LangItem data={lang} key={lang?.id} />
        ))}
      </main>
    </div>
  );
}
