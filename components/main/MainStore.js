import { useRouter } from "next/router";
import { useEffect } from "react";
import create from "zustand";

const store_ = create((set) => ({
  tab: "",
  set,
}));

export default function useMain() {
  const store = store_();

  function setTab(path, key, val) {
    const url = new URL(location?.href);
    var sp = url.searchParams;
    sp.set("tab", path);
    sp.set([key], val);
    store.set({ tab: path, [key]: val });
    history.pushState("", "", "/?" + sp?.toString());
  }

  return {
    ...store,
    setTab,
  };
}
