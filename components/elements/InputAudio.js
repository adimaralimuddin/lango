import Image from "next/image";
import React, { useRef, useState } from "react";
import Aud from "./Aud";
import But from "./But";

export default function InputAudio({
  onInput,
  text,
  button = "select file",
  type = "file",
  value,
  ...props
}) {
  const [url, setUrl] = useState(value?.url);
  const ref = useRef();

  const onInputHandler = (e) => {
    const file = e.target?.files?.[0];
    readFile(file, e);
  };

  const readFile = (file, e) => {
    if (file?.type?.includes("audio")) {
      const url_ = URL.createObjectURL(file);
      new Audio(url_).play();
      setUrl(url_);
      onInput?.({ url: url_, file }, e);
    } else {
      alert("file type not audio :" + file?.type);
    }
  };

  return (
    <div
      onDrop={(e) => {
        e.preventDefault();
        const file = e.dataTransfer.files?.[0];
        readFile(file);
      }}
      onDragOver={(e) => e.preventDefault()}
      className="flex mx-1 justify-around px-1 ring-1 bg-slate-600  rounded-md gap-1"
    >
      {text && <p>{text}</p>}
      <input
        {...props}
        ref={ref}
        onInput={onInputHandler}
        className="hidden"
        id="inptfile"
        type="file"
        accept="audio/*"
      />
      {/* <div className="flex gap-1 items-center"> */}
      <But className="m-0 flex-1 py-0" onClick={() => ref?.current?.click()}>
        <small>set</small>
      </But>
      <Aud src={url} />
      {/* </div> */}
    </div>
  );
}
