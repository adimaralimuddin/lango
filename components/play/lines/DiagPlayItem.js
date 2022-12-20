import React, { useEffect, useRef, useState } from "react";
import usePlay from "../../../hooks/usePlay";
import Box from "../../elements/Box";
import But from "../../elements/But";
import Img from "../../elements/Img";
import DiagUpdater from "./DiagUpdater";
import useDiag from "./useDiag";

export default function DiagPlayItem({ data }) {
  const [edit, setEdit] = useState(false);
  const {} = useDiag();
  const { ind, next } = usePlay();
  const au = useRef();
  const [done, setDone] = useState(false);

  useEffect(() => {
    au.current?.play();
    setDone(false);
  }, [ind]);

  const onEnded = () => {
    setDone(true);
  };

  return (
    <div>
      <Box>
        <header>
          <But onClick={() => setEdit((p) => !p)}>{edit ? "done" : "edit"}</But>
          {done && <But onClick={next}>next</But>}
        </header>
        {edit ? (
          <DiagUpdater data={data} set={setEdit} />
        ) : (
          <div>
            <p>{data?.text}</p>
            <p>{data?.trans}</p>
            <p>{data?.latin}</p>
            <p>{data?.align}</p>
            <Img src={data?.img} />
            <audio ref={au} src={data?.aud} onEnded={onEnded} controls />
          </div>
        )}
      </Box>
    </div>
  );
}
