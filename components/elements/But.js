import React from "react";

export default function But({
  className,
  children,
  warm = false,
  green = false,
  ...props
}) {
  return (
    <button
      {...props}
      className={
        "text-sm rounded-full whitespace-nowrap ring-1 p-[2px] px-2 m-[2px] hover:scale-[1.03] active:scale-110 " +
        (green && " bg-green-600 ") +
        (warm && " bg-red-900 ") +
        className
      }
    >
      {children}
    </button>
  );
}
