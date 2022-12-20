import React, { useState } from "react";
import Box from "../../elements/box";
import Icon from "../../elements/Icon";
import DiagUpdater from "./DiagUpdater";
import Indexer from "../../elements/Indexer";
import DiagPlayItem from "./DiagPlayItem";

export default function DiagViewItem({ data, i }) {
  const [edit, setEdit] = useState(false);

  return (
    <Box className="p-0 px-0 py-  ">
      <Indexer>
        {i} diag
        <Icon onClick={() => setEdit((p) => !p)}>
          {edit ? "check" : "pencil"}
        </Icon>
      </Indexer>
      <div></div>
      {edit ? (
        <DiagUpdater data={data} set={setEdit} />
      ) : (
        <DiagPlayItem data={data} i={i} />
      )}
    </Box>
  );
}
