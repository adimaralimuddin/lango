import React from "react";
import DiagEditor from "./DiagEditor";
import useDiag from "./useDiag";

export default function DiagUpdater({ data, set }) {
  const { updateDiag } = useDiag();

  const onSaveHandler = async ({ voice, text, aud, img }) => {
    const data_ = { id: data?.id, voice, text, aud, img, trans: data?.trans };
    // console.log("update diag", data_);
    await updateDiag(data_, data);
    set?.(false);
  };
  return <DiagEditor data={data} onSave={onSaveHandler} />;
}
