import React, { useState } from "react";
import But from "../elements/But";
import Input from "../elements/Input";
import Modal from "../elements/Modal";
import useMain from "../main/MainStore";
import useLesson from "../../hooks/useLesson";

export default function LessonEditor({ onSubmit, open, set, data }) {
  const { lessons } = useLesson();
  const [name, setName] = useState(data?.name);
  const [desc, setDesc] = useState(data?.desc);
  const [num, setNum] = useState(data?.num || lessons?.length + 1);
  const { lang, level } = useMain();

  const onSaveHandler = () => {
    const data_ = {
      name,
      desc,
      num,
      langId: lang,
      levelId: level,
    };
    onSubmit?.(data_);
  };

  return (
    <Modal open={open} set={set}>
      <div className="flex flex-col p-3 rounded-xl bg-slate-800">
        <Input value={name} onInput={setName} text="name" />
        <Input value={desc} onInput={setDesc} text="description" />
        <Input value={num} onInput={setNum} text="ind" type="number" />
        <But onClick={onSaveHandler}>Save</But>
      </div>
    </Modal>
  );
}
