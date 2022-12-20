import React from "react";
import useLang from "../../hooks/useLang";
import Img from "../elements/Img";

export default function MainHeader() {
  const { curLang } = useLang();
  return (
    <div className="shadow-md">
      <div className="flex items-center gap-2 max-w-xl p-2 mx-auto px-5">
        <h1 className="text-3xl font-bold text-yellow-500">
          Lango
          {"  " + process.env.NEXT_PUBLIC_PROJECT_ID}
        </h1>
        <Img src={curLang()?.img} h="30px" w="40px" />
      </div>
    </div>
  );
}
