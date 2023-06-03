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
        return " text-pink-400 dark:text-pink-300 font-bold ";
      case "trans":
        return " text-indigo-400 font-bold dark:text-indigo-300 ";
      case "latin":
        return " text-slate-500 dark:text-slate-300 ";
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
        "  flex flex-col text-center items-center text-xl " +
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
