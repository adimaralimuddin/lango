import Image from "next/image";
import React from "react";

export default function Icon({ children, className, ...props }) {
  // let i = "";
  // if (children == "fresh") {
  //   i = "fa-sharp fa-solid fa-rotate-right";
  // } else if (children == "done") {
  //   i = "fa-solid fa-check";
  // } else if (children == "edit") {
  //   i = "fa-solid fa-pencil";
  // } else if (children == "delete") {
  //   i = "fa-solid fa-trash";
  // } else if (children == "play") {
  //   i = "fa-solid fa-play";
  // } else if (children == "pause") {
  //   i = "fa-solid fa-pause";
  // } else if (children == "close") {
  //   i = "fa-solid fa-xmark";
  // }

  return (
    <i
      {...props}
      class={
        `fa-solid fa-${children}  ` +
        "  dark:text-purple-300 font-bold text-lg  flex items-center justify-center px-2 m-[2px] aspect-square  rounded-full " +
        (props?.onClick &&
          " cursor-pointer active:scale-125 hover:scale-110 hover:bg-slate-700 ") +
        className
      }
    ></i>
  );
}
