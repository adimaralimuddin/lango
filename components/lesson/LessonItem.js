import { useRouter } from "next/router";
import React from "react";
import Box from "../elements/Box";
import useMain from "../main/MainStore";
import Indexer from "../elements/Indexer";

export default function LessonItem({ data }) {
  const { lang, level } = useMain();
  const { set } = useMain();
  const r = useRouter();

  const onClickHandler = () => {
    set({ tab: "lessons", lesson: data?.id });
    r.push(`play?lang=${lang}&level=${level}&lesson=${data?.id}`);
  };
  return (
    <Box className="">
      <Indexer>{data?.num}</Indexer>
      <div className="flex flex-cold items-center justify-between gap-3 cursor-pointer p-2">
        <div
          className="flex flex-col ditems-center gap-3"
          onClick={onClickHandler}
        >
          <p className="text-pink-300 font-bold text-xl leading-3">
            {data?.name}
          </p>
          <p className="leading-3 text-slate-300">{data?.desc}</p>
        </div>
      </div>
    </Box>
  );
}
