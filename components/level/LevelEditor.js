import React, { useState } from "react";
import useLevel from "../../hooks/useLevel";
import But from "../elements/But";
import Input from "../elements/Input";
import Modal from "../elements/Modal";
import useMain from "../main/MainStore";

export default function LevelEditor({ onSubmit, open, set, data }) {
  const { lang } = useMain();
  const { levels } = useLevel();
  const [name, setName] = useState(data?.name);
  const [level, setLevel] = useState(data?.level);
  const [num, setNum] = useState(data?.Num || levels?.length + 1);

  const onSaveHandler = () => {
    const data_ = {
      langId: lang,
      name,
      level,
      num,
    };
    onSubmit?.(data_);
  };

  return (
    <Modal open={open} set={set}>
      <div className="flex flex-col p-3 rounded-xl bg-slate-800">
        <Input value={name} onInput={setName} text="name" />
        <Input value={level} onInput={setLevel} text="level" />
        <Input value={num} onInput={setNum} text="num" type="number" />
        <But onClick={onSaveHandler}>Save</But>
      </div>
    </Modal>
  );
}
