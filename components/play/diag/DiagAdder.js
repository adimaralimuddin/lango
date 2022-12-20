import React, { useState } from "react";
import But from "../../elements/But";
import Modal from "../../elements/Modal";
import DiagEditor from "./DiagEditor";
import useDiag from "./useDiag";

export default function DiagAdder() {
  const [open, setOpen] = useState(false);
  const { addDiag } = useDiag();
  const onSave = async (data) => {
    addDiag(data, () => {
      setOpen(false);
    });
  };
  return (
    <div className="">
      <But onClick={() => setOpen(true)}>diag</But>
      <Modal open={open} set={setOpen}>
        <div className=" w-full max-w-xl rounded-xl">
          <DiagEditor onSave={onSave} />
        </div>
      </Modal>
    </div>
  );
}
