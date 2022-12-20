import React from "react";
import Icon from "./Icon";

export default function Modal({
  open,
  set,
  children,
  div,
  className,
  ...props
}) {
  if (!open) return null;

  return (
    <div className="fixed top-0 left-0 h-screen w-screen bg-slate-900 bg-opacity-90 flex flex-col items-center justify-center p-3 z-30">
      <Icon
        className="ring-1 ml-auto rounded-full aspect-square text-center text-xl cursor-pointer"
        onClick={() => set?.(false)}
      >
        xmark
      </Icon>
      {/* <div className={" w-full max-w-xl rounded-xl  " + className}> */}
      {children}
      {/* </div> */}
    </div>
  );
}
