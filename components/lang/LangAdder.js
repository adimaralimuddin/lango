import React, { useState } from "react";
import useLang from "../../hooks/useLang";
import LangEditor from "./LangEditor";
import But from "../elements/But";

export default function LangAdder() {
  const [open, setOpen] = useState(false);
  const { addLang } = useLang();

  const onAddLang = async (data) => {
    console.log(data);
    const x = await addLang(data);
    console.log("done ", x);
    setOpen(false);
  };

  return (
    <div>
      <But onClick={() => setOpen(true)}>add language</But>
      <LangEditor onSubmit={onAddLang} open={open} set={setOpen} />
    </div>
  );
}
