import React, { useEffect, useState } from "react";
import usePlay from "../../../hooks/usePlay";
import Box from "../../elements/box";
import But from "../../elements/But";
import Icon from "../../elements/Icon";
import LinePlayItem from "../lines/LinePlayItem";
import useLines from "../lines/useLines";

export default function SelectPlayItem({ data, i }) {
  const { listenLines } = useLines();
  const { setDone } = usePlay();
  const [lines, setLines] = useState([]);
  const [ans, setAns] = useState(null);
  const [sel, setSel] = useState(null);

  useEffect(() => {
    const ret = listenLines(data?.id, (lines_) => {
      setLines(lines_?.map((l) => ({ ...l, r: Math.random() })));
      const ans_ = lines_?.find((l) => l?.ans);
      setAns(ans_);
    });
    return ret;
  }, [data]);

  const onSelectHandler = (line) => {
    setSel(line);
    if (line?.text == ans?.text) {
      new Audio("audio/correct.wav")?.play();
      setDone();
      setLines((p) =>
        p?.map((l) => (l?.text != line?.text ? { ...l, done: true } : l))
      );
    } else {
      new Audio("audio/error.wav")?.play();
    }
  };

  const restart = () => {
    setLines((p) => p?.map((l) => ({ ...l, done: false, r: Math.random() })));
  };

  return (
    <Box className=" select-none min-w-[300px] my-0 mx-0 bg-slate-800 p-6">
      <header className="flex ">
        <Icon onClick={restart}>rotate-right</Icon>
      </header>
      <div className=" py-2">
        <LinePlayItem
          className={
            " bg-slate-700 " +
            (data?.ansSide == "img" && "h-[160px] w-[100px] mx-auto")
          }
          line={ans}
          side={data?.ansSide}
          data={data}
          key={ans?.id}
          selectable={false}
        />
      </div>
      <div className="grid grid-cols-2 gap-3 ">
        {lines
          ?.sort((a, b) => a?.r - b?.r)
          ?.map((l, i) => (
            <LinePlayItem
              className={
                " bg-slate-700 " +
                (data?.side == "img" && " min-h-[150px] w-[50%]d")
              }
              line={l}
              i={i}
              side={data?.side}
              data={data}
              sel={sel}
              // selectable={!done}
              onSel={onSelectHandler}
              key={l?.id}
            />
          ))}
      </div>
    </Box>
  );
}
