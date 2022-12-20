import React from "react";

export default function Absol({ className, ...props }) {
  return (
    <div className={" relative "}>
      <div {...props} className={" absolute " + className}></div>
    </div>
  );
}
