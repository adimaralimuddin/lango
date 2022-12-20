import Image from "next/image";
import React from "react";

export default function Img({ src, w, h, ...props }) {
  if (!src) return null;
  return (
    <div
      className={"relative h-[150px] w-[150px] " + props?.className}
      style={{ width: w, height: h }}
    >
      <Image
        alt="img item"
        className="rounded-lg"
        src={src}
        objectFit="fit"
        layout="fill"
      />
    </div>
  );
}
