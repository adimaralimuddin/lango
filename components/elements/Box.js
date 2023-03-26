import React from "react";

export default function Box({ className, children, ...props }) {
  return (
    <div
      {...props}
      className={"p-3 shadow-md rounded-xl bg-slate-800d " + className}
    >
      {children}
    </div>
  );
}
