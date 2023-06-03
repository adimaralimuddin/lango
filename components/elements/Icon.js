import Image from "next/image";
import React from "react";

export default function Icon({ children, className, ...props }) {
  return (
    <i
      {...props}
      class={
        `fa-solid fa-${children}  ` +
        " text-primary-light dark:text-violet-200 font-bold text-lg  flex items-center justify-center px-2 m-[2px] aspect-square  rounded-full " +
        (props?.onClick &&
          " cursor-pointer active:scale-125 hover:scale-110  ") +
        className
      }
    ></i>
  );
}
