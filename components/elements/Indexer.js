import React from "react";
import Absol from "./Absol";

export default function Indexer({ className, text, ...props }) {
  return (
    <Absol
      {...props}
      className={
        " whitespace-nowrap right-0 left-0d -top-5 bg-slate-700 px-2 rounded-md text-sm  " +
        className
      }
    >
      <small className="flex items-center gap-1 p-[2px]">
        {text || props?.children}
      </small>
    </Absol>
  );
}
