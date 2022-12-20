import { useRouter } from "next/router";
import React from "react";
import { removeDb } from "../../hooks/useDb";
import Box from "../elements/Box";
import But from "../elements/But";
import useStore from "../main/MainStore";
import LevelUpdater from "./LevelUpdater";
import Indexer from "../elements/Indexer";
export default function LevelItem({ data }) {
  const { set, setTab } = useStore();
  const r = useRouter();
  const onClickHandler = () => {
    setTab("lessons", "level", data?.id);
    // set({ tab: "lessons", level: data?.id });
  };

  return (
    <Box className="">
      <Indexer>{data?.num}</Indexer>
      <div className="flex flex-cold items-center justify-between gap-3 cursor-pointer text-center">
        <div
          className="flex gap-3 items-center flex-1"
          onClick={onClickHandler}
        >
          <p>{data?.level}</p>
          <h1 className="text-xl text-purple-300">{data?.name}</h1>
        </div>
        <div className="flex items-center">
          <But onClick={() => removeDb("levels", data?.id)}>x</But>
          <LevelUpdater data={data} />
        </div>
      </div>
    </Box>
  );
}
