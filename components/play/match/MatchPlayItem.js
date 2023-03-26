import React, { useEffect, useState } from "react";
import usePlay from "../../../hooks/usePlay";
import Box from "../../elements/Box";
import Icon from "../../elements/Icon";
import LinePlayItem from "../lines/LinePlayItem";
import useLines from "../lines/useLines";

export default function MatchPlayItem({ data, i }) {
  const { listenLines } = useLines();
  const { setDone } = usePlay();
  // local state
  const [lines, setLines] = useState([]);
  const [sel1, setSel1] = useState(null);
  const [sel2, setSel2] = useState(null);

  useEffect(() => {
    const ret = listenLines(data?.id, (lines_) => {
      setLines(
        lines_?.map((l) => ({
          ...l,
          r1: Math.random(),
          r2: Math.random(),
        }))
      );
    });
    return ret;
  }, [data]);

  const check = (line, set, sel) => {
    set(line);
    if (line?.text == sel?.text) {
      new Audio("/audio/correct.wav")?.play();

      setLines((p) => {
        const newLines = p.map((l) => (l == line ? { ...l, done: true } : l));

        let pass = true;
        newLines?.map((l) => {
          if (!l?.done) {
            pass = false;
          }
        });
        if (pass) {
          setDone(true);
        }

        return newLines;
      });
      return true;
    } else {
      new Audio("/audio/error.wav")?.play();
    }
  };

  const onSelHandler = (line, num) => {
    if (num == 1) {
      check(line, setSel1, sel2);
    } else {
      check(line, setSel2, sel1);
    }
  };

  const restart = () => {
    setLines((p) =>
      p?.map((l) => ({
        ...l,
        r1: Math.random(),
        r2: Math.random(),
        done: null,
      }))
    );
    setSel1(null);
    setSel2(null);
  };

  return (
    <div className=" select-none">
      <header className="flex">
        <Icon onClick={restart}>rotate-right</Icon>
      </header>
      <div className=" flex flex-col  gap-6">
        <Pair
          lines={lines}
          data={data}
          sel={sel1}
          onSel={(l) => onSelHandler(l, 1)}
        />
        <Pair
          lines={lines}
          data={data}
          sel={sel2}
          onSel={(l) => onSelHandler(l, 2)}
          r="r2"
          side="ansSide"
        />
      </div>
    </div>
  );
}

function Pair({ lines, data, sel, onSel, r = "r1", side = "side", className }) {
  return (
    <div
      className={
        "bg-red-300d flex gap-3 flex-wrap content-center justify-center"
      }
    >
      {lines
        ?.sort((a, b) => a?.[r] - b?.[r])
        ?.map((l, i) => (
          <LinePlayItem
            className={
              data?.[side] == "img"
                ? " min-h-[100px] w-[100px] "
                : " bg-orange-200 text-white "
            }
            line={l}
            i={i}
            side={data?.[side]}
            data={data}
            sel={sel}
            onSel={onSel}
            key={l?.id}
          />
        ))}
    </div>
  );
}
