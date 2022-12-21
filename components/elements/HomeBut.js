import React from "react";
import usePlay from "../../hooks/usePlay";
import Icon from "./Icon";

export default function HomeBut() {
  const { home } = usePlay();
  return <Icon onClick={home}>home</Icon>;
}
