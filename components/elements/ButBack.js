import React from "react";
import useMain from "../main/MainStore";
import But from "./But";

export default function ButBack({ children, caller, ...props }) {
  const { set } = useMain();
  return (
    <But
      onClick={() => {
        set({ tab: children });
        caller?.(children);
      }}
      {...props}
    >
      {"<"}
    </But>
  );
}
