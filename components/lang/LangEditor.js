import React, { useState } from "react";
import But from "../elements/But";
import Input from "../elements/Input";
import InputFile from "../elements/InputFile";
import Modal from "../elements/Modal";

export default function LangEditor({ onSubmit, open, set, data }) {
  const [name, setName] = useState(data?.name);
  const [img, setImg] = useState(data?.img);
  const [code, setCode] = useState(data?.code);
  const [audCode, setAudCode] = useState(data?.audCode || data?.code);

  const onSaveHandler = () => {
    const data = {
      name,
      img,
      code,
      audCode: audCode || code,
    };
    onSubmit?.(data);
  };

  return (
    <Modal open={open} set={set}>
      <div className="m-auto flex flex-col justify-start p-3 rounded-xl bg-slate-800">
        <Input value={name} onInput={setName} text="name" />
        <InputFile onInput={setImg} text="image" type="file" />
        <div className="grid grid-cols-2 gap-2">
          <Input value={code} onInput={setCode} text="code" />
          <Input value={audCode} onInput={setAudCode} text="audCode" />
        </div>
        <But onClick={onSaveHandler}>Save</But>
      </div>
    </Modal>
  );
}
