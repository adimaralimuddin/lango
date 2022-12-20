import React, { useEffect } from "react";
import useLang from "../../hooks/useLang";
import LangItem from "./LangItem";
import LangAdder from "./LangAdder";
export default function LangMain() {
  const { listenLangs, langs } = useLang();

  useEffect(() => {
    const ret = listenLangs();
    return ret;
  }, []);

  return (
    <div className="flex flex-col items-center p-3  flex-1 ">
      <div className="w-full max-w-2xl p-3">
        <LangAdder />
      </div>
      <div className="flex-1 w-full max-w-2xl p-3 flex flex-wrap gap-4 justify-center items-start content-start">
        {langs?.map((lang) => (
          <LangItem data={lang} key={lang?.id} />
        ))}
      </div>
    </div>
  );
}
