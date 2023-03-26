import React from "react";

export default function Line({
  text,
  type,
  autoSize = true,
  className,
  ...props
}) {
  const color = () => {
    switch (type) {
      case "text":
        return " text-secondary-lightd text-lime-500 font-medium ";
      case "trans":
        return " text-indigo-400 font-medium ";
      case "latin":
        return " text-slate-500 ";
      default:
        break;
    }
  };

  const size = () => {
    switch (type) {
      case "text":
        return "text-smd";
      case "trans":
        return "text-smd";
      case "latin":
        return "text-sm";
      default:
        break;
    }
  };

  return (
    <div
      {...props}
      className={
        " flex flex-col text-center items-center text-xl " +
        color() +
        "" +
        (autoSize && size()) +
        className
      }
      onClick={(e) => {
        navigator.clipboard.writeText(e.target.innerText);
        props?.onClick?.({ text, type });
      }}
    >
      {/* {text?.split(".")?.map((l) => (
        <p>{l}</p>
      ))} */}
      {text}
    </div>
  );
}
