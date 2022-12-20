import React, { useState } from "react";
import useLevel from "../../hooks/useLevel";
import Icon from "../elements/Icon";
import LevelEditor from "./LevelEditor";

export default function LevelUpdater({ data }) {
  const [open, setOpen] = useState(false);
  const { updateLevel } = useLevel();

  const onUpdate = async (data_) => {
    await updateLevel(data_, data);
    setOpen(false);
  };
  return (
    <div>
      <Icon onClick={() => setOpen((p) => !p)}>pencil</Icon>
      <LevelEditor onSubmit={onUpdate} open={open} set={setOpen} data={data} />
    </div>
  );
}
