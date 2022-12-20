import React, { useState } from "react";
import But from "../elements/But";
import useLevel from "../../hooks/useLevel";
import LevelEditor from "./LevelEditor";

export default function LevelAdder() {
  const [open, setOpen] = useState(false);
  const { addLevel } = useLevel();

  const onAddLevel = async (data) => {
    await addLevel(data);
    setOpen(false);
  };

  return (
    <div>
      <But onClick={() => setOpen(true)}>add Level</But>
      <LevelEditor onSubmit={onAddLevel} open={open} set={setOpen} />
    </div>
  );
}
