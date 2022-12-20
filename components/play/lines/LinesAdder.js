import React, { useState } from "react";
import But from "../../elements/But";
import Modal from "../../elements/Modal";
import LinesEditor from "./LinesEditor";
import useLines from "./useLines";

export default function LinesAdder() {
  const [open, setOpen] = useState(false);
  const { addLines } = useLines();
  const onSave = async (data) => {
    await addLines(data);
    setOpen(false);
  };
  return (
    <div>
      <But onClick={() => setOpen(true)}>lines</But>
      <Modal div="" open={open} set={setOpen}>
        <div className="bg-slate-800 p-3 rounded-lg ring-2 ring-purple-300">
          <LinesEditor
            className="flex-col flex-wrap text-xl min-w-[200px]"
            onSave={onSave}
            data={{ align: "center", text: "what is this?", changed_: true }}
          />
        </div>
      </Modal>
    </div>
  );
}
