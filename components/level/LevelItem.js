import React from "react";
import Box from "../elements/Box";
import useStore from "../main/MainStore";
import Indexer from "../elements/Indexer";
export default function LevelItem({ data }) {
  const { setTab } = useStore();
  const onClickHandler = () => {
    setTab("lessons", "level", data?.id);
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
      </div>
    </Box>
  );
}
