import React from "react";

export default function Select({
  children,
  text,
  className,
  onInput,
  col = false,
  ...props
}) {
  return (
    <div
      className={
        "flex gap-2 items-center dark:text-slate-300 p-1  " +
        (col && " flex-col ")
      }
    >
      <small>{text && text}</small>
      <select
        {...props}
        onInput={(e) => onInput?.(e?.target?.value, e)}
        className={
          "ring-1  rounded-full px-1 dark:bg-slate-700 text-sm  text-center  " +
          className
        }
      >
        {children}
      </select>
    </div>
  );
}
