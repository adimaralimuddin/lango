import { motion } from "framer-motion";
import React from "react";
import usePlay from "../../../hooks/usePlay";
import DiagPlayItem from "../diag/DiagPlayItem";
import DiagViewItem from "../diag/DiagViewItem";
import MatchPlayItem from "../match/MatchPlayItem";
import SelectPlayItem from "../select/SelectPlayItem";

export default function ItemPlay({ item, ind }) {
  const itemView = () => {
    if (item?.type == "diag") {
      return <DiagPlayItem data={item} i={ind} />;
    } else if (item?.type == "match") {
      return <MatchPlayItem data={item} i={ind} />;
    } else if (item?.type == "select") {
      return <SelectPlayItem data={item} i={ind} />;
    } else {
      return null;
    }
  };

  return itemView();
}
