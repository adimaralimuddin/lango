import React, { useEffect } from "react";
import LevelItem from "./LevelItem";
import useLevel from "../../hooks/useLevel";
import ButBack from "../elements/ButBack";
import useMain from "../main/MainStore";
export default function LevelMain() {
  const { listenLevels, levels, clearLevel } = useLevel();
  const { lang } = useMain();

  useEffect(() => {
    const ret = listenLevels(lang);
    return ret;
  }, [lang]);

  return (
    <div className="flex flex-col ring-1 flex-1 items-center ">
      <div className="flex w-full max-w-xl p-3 ">
        <ButBack caller={clearLevel}>lang</ButBack>
      </div>
      <div className=" p-3 flex-1 flex flex-col flex-wrap gap-3 max-w-xl  w-full">
        <h1>Levels</h1>
        {levels
          ?.sort((a, b) => a?.num - b?.num)
          ?.map((level) => (
            <LevelItem data={level} key={level?.id} />
          ))}
      </div>
    </div>
  );
}
