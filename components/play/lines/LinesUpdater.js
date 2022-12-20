import React, { useEffect, useState } from "react";
import LineAdder from "./LineAdder";
import LineItemView from "./LineItemView";
import LinesEditor from "./LinesEditor";
import useLines from "./useLines";

export default function LinesUpdater({ data, set }) {
  const { updateLines, listenLines } = useLines();
  const [line, setLine] = useState([]);

  useEffect(() => {
    const ret = listenLines(data?.id, setLine);
    return ret;
  }, [data]);

  const onSaveHandler = async ({ type, side, ansSide, opose }) => {
    const data_ = { id: data?.id, type, side, ansSide, opose };
    await updateLines(data_);
    set?.(false);
  };
  return (
    <div className="ring-2 bg-slate-800 ring-purple-400 rounded-xl p-3">
      <LinesEditor data={data} onSave={onSaveHandler} />
      <div className="flex flex-col ">
        <div>
          <LineAdder lines={data} />
          <div className="flex flex-col gap-1 py-2">
            {line?.map((l) => (
              <LineItemView data={l} key={l?.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
