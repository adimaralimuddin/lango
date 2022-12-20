import React, { useState } from "react";
import Box from "../../elements/Box";
import But from "../../elements/But";
import Icon from "../../elements/Icon";
import Indexer from "../../elements/Indexer";
import LinesUpdater from "../lines/LinesUpdater";
import SelectPlayItem from "./SelectPlayItem";

export default function SelectViewItem({ data, i }) {
  const [edit, setEdit] = useState(false);

  return (
    <Box className=" p-0 ">
      <Indexer>
        {i} {data?.type}
        <Icon onClick={() => setEdit((p) => !p)}>
          {edit ? "check" : "pencil"}
        </Icon>
      </Indexer>
      {edit && <LinesUpdater data={data} set={setEdit} />}
      {!edit && <SelectPlayItem data={data} i={i} />}
    </Box>
  );
}
