import React from "react";
import usePlay from "../../hooks/usePlay";
import Icon from "./Icon";

export default function HomeBut() {
  const { home } = usePlay();
  // const onHome = () => {
  //   restore();
  //   const url = new URL(location?.href);
  //   var sp = url.searchParams;
  //   sp.set("tab", "lessons");
  //   sp.set("lang", lessonData.langId);
  //   sp.set("level", lessonData.levelId);
  //   set({ tab: "lesson" });
  //   router.push("/?" + sp?.toString());
  // };
  return <Icon onClick={home}>home</Icon>;
}
