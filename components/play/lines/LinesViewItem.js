import React, { useEffect, useState } from "react";
import Box from "../../elements/box";
import But from "../../elements/But";

import { removeDb } from "../../../hooks/useDb";
import LinesUpdater from "./LinesUpdater";
import LineAdder from "./LineAdder";
import useLines from "./useLines";
import LineItemView from "./LineItemView";
import Indexer from "../../elements/Indexer";
import Icon from "../../elements/Icon";

export default function LinesViewItem({ data, i }) {
  const [edit, setEdit] = useState(false);
  const { listenLines, deleteLines } = useLines();
  const [line, setLine] = useState([]);

  useEffect(() => {
    const ret = listenLines(data?.id, setLine);
    return ret;
  }, [data]);

  return (
    <div>
      <Box className="flexd">
        <Indexer className={"-top-8"}>
          {i} {data?.type}
          <Icon onClick={() => setEdit((p) => !p)}>
            {edit ? "check" : "pencil"}
          </Icon>
          <Icon onClick={() => deleteLines(data, line)}>trash</Icon>
        </Indexer>
        <div className="flex-1 flex gap-2 text-sm p-1">
          {prop("type", data?.type)}
          {prop("side", data?.side)}
          {prop("ansSide", data?.ansSide)}
          {prop("opose", data?.opose?.toString())}
        </div>
        {edit ? (
          <LinesUpdater data={data} set={setEdit} />
        ) : (
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
        )}
      </Box>
    </div>
  );
}

function prop(text, val) {
  return (
    <span className="leading-3">
      <p>{val}</p>
      <small className="dark:text-slate-400">{text}</small>
    </span>
  );
}
