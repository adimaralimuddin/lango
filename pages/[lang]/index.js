import { useRouter } from "next/router";
import React from "react";
import LevelMain from "../../components/level/LevelMain";

export default function index() {
  const { query } = useRouter();
  return (
    <div>
      lang = {query?.lang}
      <p></p>
      <LevelMain />
    </div>
  );
}
