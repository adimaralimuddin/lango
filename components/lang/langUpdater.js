import React, { useState } from "react";
import useLang from "../../hooks/useLang";
import Icon from "../elements/Icon";
import LangEditor from "./LangEditor";

export default function LangUpdater({ data }) {
  const [open, setOpen] = useState(false);
  const { updateLang } = useLang();

  const onUpdateHandler = async (data_) => {
    await updateLang(data_, data);
    setOpen(false);
  };

  return (
    <div className="flex">
      <Icon onClick={() => setOpen((p) => !p)}>pencil</Icon>
      <LangEditor
        onSubmit={onUpdateHandler}
        open={open}
        set={setOpen}
        data={data}
      />
    </div>
  );
}
