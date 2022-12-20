import React from "react";
import DiagEditorItem from "../diag/DiagEditorItem";
import LinesViewItem from "../lines/LinesViewItem";

export default function EditorItem({ data, i }) {
  if (data?.type == "diag") {
    return <DiagEditorItem data={data} i={i} />;
  } else if (data?.type == "select" || data?.type == "match") {
    return <LinesViewItem data={data} i={i} />;
  } else return "type = " + data?.type || "undef";
}
