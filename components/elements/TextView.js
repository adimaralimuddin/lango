import React from "react";

export default function TextView({ text, color: color_, ...props }) {
  return (
    <small
      onClick={(e) => {
        navigator.clipboard.writeText(e.target.innerText);
      }}
      {...props}
      className={
        "p-1 flex-1 m-[2px] rounded-md flex items-center text-slate-400 bg-slate-800 active:bg-black active:cursor-pointer  " +
        `text-${color_}-400 ` +
        props?.className
      }
    >
      {text || props?.children}
    </small>
  );
}
