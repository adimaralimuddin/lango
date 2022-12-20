import React from "react";

export default function Input({
  type = "text",
  text,
  className,
  inpCss,
  onInput,
  ...props
}) {
  return (
    <div
      className={"dark:text-slate-300 flex flex-1 flex-col p-1 " + className}
    >
      {text && <p className="dark:text-slate-300d">{text}</p>}
      <input
        type={type}
        {...props}
        onInput={(e) => onInput?.(e?.target?.value, e)}
        className={
          "ring-1 dark:ring-slate-800 p-1 rounded-lg dark:bg-slate-700 px-2 flex-1 " +
          inpCss
        }
      />
    </div>
  );
}
