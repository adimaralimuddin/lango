import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import useLang from "../../hooks/useLang";
import { ThemeButton } from "../../hooks/useTheming";
import HeaderDiv from "../elements/HeaderDiv";
import Img from "../elements/Img";
import Logo from "../elements/Logo";

export default function MainHeader({ showTheme = true }) {
  const { curLang } = useLang();
  return (
    <HeaderDiv>
      <nav className="flex gap-4 justify-between items-center flex-wrap flex-1 text-white font-medium ">
        <Logo />
        {/* <Link href="/">CASE STUDY</Link> */}
        {/* <Link href="/"> */}
        <SiteMap />
        {/* </Link> */}
        <Link href="https://adimaralimuddin.com" target="_blank">
          PORTFOLIO
        </Link>
      </nav>
      <Img src={curLang()?.img} h="30px" w="40px" />
      {showTheme && <ThemeButton />}
    </HeaderDiv>
  );
}

const mapsData = [
  { text: "Home Page", link: "/" },
  { text: "Languages", link: "#languages" },
  { text: "a Language", link: "/learn/o3I7qy41f4D9c5zdapfo" },
  {
    text: "Play",
    link: "/play?lang=undefined&level=undefined&lesson=V96NzHSWo3Deq8lp3vLc",
  },
];
export function SiteMap() {
  const [maps, setMaps] = useState(mapsData);
  const [current, setCurrent] = useState(null);
  const [open, setOpen] = useState(false);
  const onClick = (map) => {
    setCurrent(map);
    // setOpen((p) => !p);
  };
  return (
    <span
      onClick={() => setOpen((p) => !p)}
      // onClick={onClick}
      className="relative z-50 cursor-pointer "
    >
      SITE MAP
      {open && (
        <motion.div className="absolute bg-violet-500 w-[230px] top-6 -right-6 rounded-xl shadow-xl p- text-center overflow-hidden ">
          <ul className="flex flex-col gap-2d ">
            {mapsData?.map((map, i) => (
              <Link
                onClick={() => onClick(map)}
                className={
                  "hover:bg-violet-400 p-2 " +
                  (current?.text === map.text && " bg-violet-600")
                }
                href={map.link}
                key={i}
              >
                {map.text}
              </Link>
            ))}
          </ul>
        </motion.div>
      )}
    </span>
  );
}
