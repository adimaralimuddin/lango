import { useRouter } from "next/router";
import React from "react";
import Icon from "./Icon";

export default function HomeBut() {
  const router = useRouter();

  return (
    <Icon className="sm:text-4xl " onClick={router.back}>
      home
    </Icon>
  );
}
