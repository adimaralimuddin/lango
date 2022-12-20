import React from "react";
import But from "../elements/But";
import DiagAdder from "./diag/DiagAdder";
import LinesAdder from "./lines/LinesAdder";

export default function PlayAdder() {
  return (
    <div className="flex p-2 bg-slate-900">
      <DiagAdder />
      <LinesAdder />
    </div>
  );
}
