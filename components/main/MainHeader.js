import Link from "next/link";
import React from "react";
import useLang from "../../hooks/useLang";
import Img from "../elements/Img";

export default function MainHeader() {
  const { curLang } = useLang();
  return (
    <div className="bg-primary-light">
      <div className="container flex items-center gap-2 max-w-5xl p-4  mx-auto px-5">
        <nav className="flex gap-3 justify-between items-center flex-1 text-white font-medium ">
          <h1 className="text-4xl font-bold flex-1">Bhasha</h1>
          {/* <Link href="/">LEARN</Link> */}
          {/* <Link href="/">PROFILE</Link> */}
        </nav>
        <Img src={curLang()?.img} h="30px" w="40px" />
      </div>
    </div>
  );
}
