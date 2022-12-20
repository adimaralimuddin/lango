import React from "react";
import { getLang } from "../../../hooks/trans";
import usePlay from "../../../hooks/usePlay";
import LineEditor from "../../elements/LineEditor";
import useLines from "./useLines";

export default function LineAdder({ lines }) {
  const { addLine } = useLines();
  const { code } = usePlay();

  const voice = () => {
    return getLang(code)?.voices?.find((v) => v?.align == "c");
  };

  const onSaveHandler = (data_) => {
    console.log(voice());
    const data = {
      ...data_,
      voice: voice(),
      lines: lines?.id,
    };
    // console.log(data);
    addLine(data);
  };

  return (
    <div>
      <LineEditor onSave={onSaveHandler} />
    </div>
  );
}
