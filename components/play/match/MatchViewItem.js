import React, { useState } from "react";
import Box from "../../elements/box";
import But from "../../elements/But";
import Icon from "../../elements/Icon";
import Indexer from "../../elements/Indexer";
import LinesUpdater from "../lines/LinesUpdater";
import MatchPlayItem from "./MatchPlayItem";

export default function MatchViewItem({ data, i }) {
  const [edit, setEdit] = useState(false);

  return (
    <Box className="select-none p-0">
      <Indexer>
        <p>
          {i} {data?.type}
        </p>
        <Icon onClick={() => setEdit((p) => !p)}>
          {edit ? "check" : "pencil"}
        </Icon>
      </Indexer>

      {edit && <LinesUpdater data={data} set={setEdit} />}
      {!edit && <MatchPlayItem data={data} i={i} />}
    </Box>
  );
}
