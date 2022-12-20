import React from "react";
import DiagViewItem from "../diag/DiagViewItem";
import MatchViewItem from "../match/MatchViewItem";
import SelectViewItem from "../select/SelectViewItem";

export default function ItemView({ item, ind }) {
  const itemView = () => {
    if (item?.type == "diag") {
      return <DiagViewItem data={item} i={ind} />;
    } else if (item?.type == "match") {
      return <MatchViewItem data={item} i={ind} />;
    } else if (item?.type == "select") {
      return <SelectViewItem data={item} i={ind} />;
    }
  };

  return <div className="flex-1d">{itemView()}</div>;
}
