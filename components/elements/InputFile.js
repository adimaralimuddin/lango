import Image from "next/image";
import React, { useRef, useState } from "react";
import But from "./But";

export default function InputFile({
  onInput,
  text,
  button = "select file",
  type = "image",
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
    const url_ = URL.createObjectURL(file);
    setUrl(url_);
    onInput?.({ url: url_, file }, e);
  };

  return (
    <div className="flex flex-wrap ">
      <p>{text && text}</p>
      <input
        ref={ref}
        {...props}
        onInput={onInputHandler}
        className="hidden text-sm "
        id="inptfile"
        type="file"
      />
      <div
        onClick={() => ref?.current?.click()}
        onDrop={(e) => {
          e.preventDefault();
          const file = e.dataTransfer.files?.[0];
          readFile(file);
        }}
        onDragOver={(e) => e.preventDefault()}
        className="relative p-3d h-[56px] w-[60px] bg-slate-600 rounded-md"
      >
        {url && (
          <Image
            className="ring-1 ring-slate-800 rounded-lg"
            src={url}
            objectFit="fit"
            layout="fill"
            alt="img input"
          />
        )}
      </div>
    </div>
  );
}
