import React, { useState } from "react";
import Box from "../../elements/box";
import { removeDb } from "../../../hooks/useDb";
import DiagUpdater from "./DiagUpdater";
import Indexer from "../../elements/Indexer";
import Icon from "../../elements/Icon";
import LineItemView from "../lines/LineItemView";
export default function DiagEditorItem({ data, i }) {
  const [edit, setEdit] = useState(false);

  return (
    <div>
      <Box>
        <Indexer className="-top-9">
          {i} diag
          <Icon onClick={() => setEdit((p) => !p)}>
            {edit ? "check" : "pencil"}
          </Icon>
          <Icon onClick={() => removeDb("items", data?.id)}>trash</Icon>
        </Indexer>
        <span className="relative">
          <small
            className={
              " absolute -top-3 px-2 rounded-md " +
              (data?.voice?.align?.trim() == "r" && " bg-violet-500 ") +
              (data?.voice?.align == "l" && " bg-orange-600 ")
            }
          >
            {data?.align}
          </small>
          <button
            className={
              "" + (data?.voice?.align?.trim() == "r" && " bg-violet-500 ")
            }
            onClick={() => console.log(data?.voice?.align)}
          >
            {data?.voice?.align}
          </button>
        </span>
        <LineItemView editable={false} data={data} className="ring-0" />
        {edit && <DiagUpdater data={data} set={setEdit} />}
      </Box>
    </div>
  );
}
