import React from "react";
import Aud from "../../elements/Aud";
import Img from "../../elements/Img";
import Line from "../../elements/Line";

export default function LinePlayItem({
  line,
  data,
  side,
  sel,
  onSel,
  selectable = true,
  ...props
}) {
  const onSelect = () => {
    if (line?.done || !selectable) return;
    onSel(line);
  };

  return (
    <div
      {...props}
      onClick={onSelect}
      style={{ opacity: line?.done && "15%" }}
      className={
        "cursor-pointer rounded-xl overflow-hidden text-center flex flex-col items-center justify-center leading-5 ring-violet-400 min-w-[120px] active:scale-105  " +
        (sel == line && " ring-2 ") +
        (line?.done && " cursor-default  ") +
        props?.className
      }
    >
      <Item text={line?.trans} type="trans" side={side} />
      <Item text={line?.text} type="text" side={side} />
      <Item text={line?.latin} type="latin" side={side} />
      <Item text={line?.img} type="img" side={side} />
      <Item text={line?.aud} type="aud" side={side} done={line?.done} />
    </div>
  );
}

function Item({ text, type, side, done }) {
  if (side == type) {
    if (type == "img") {
      return <Img src={text} h="100%" w="100%" className="" />;
    } else if (type == "aud") {
      return (
        <Aud
          src={text}
          playable={!done}
          className=" py-2d rounded-md ring-0 "
        />
      );
    } else {
      return <Line className=" p-2" text={text} type={type} />;
    }
  } else {
    return null;
  }
}
