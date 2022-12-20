import React, { useState, useSyncExternalStore } from "react";
import Box from "./box";
import InputAudio from "./InputAudio";
import InputFile from "./InputFile";
import But from "./But";
import { getLang, translate } from "../../hooks/trans";
import TextView from "./TextView";
import usePlay from "../../hooks/usePlay";

export default function LineEditor({ data, onSave, set }) {
  const { code } = usePlay();
  const [text, setText] = useState(data?.text);
  const [img, setImg] = useState({ url: data?.img });
  const [aud, setAud] = useState({ url: data?.aud });
  const [ans, setAns] = useState(data?.ans || false);
  const [trans, setTrans] = useState(data?.trans || "");
  const [latin, setLatin] = useState(data?.latin || "");
  const [voice, setVoice] = useState(initVoice());

  const onSaveHandler = () => {
    onSave?.({ img, aud, text, ans, trans, latin, voice });
  };

  const onTransHandler = async () => {
    const { trans, latin } = await translate({ text });
    setTrans(trans);
    setLatin(latin);
  };

  function initVoice() {
    if (data?.voice) {
      return data?.voice;
    } else {
      return getVoice();
    }
  }

  function getVoice() {
    const v = getLang(code)?.voices?.find((v) => v?.align == "c");
    return v;
  }

  return (
    <Box className="flex p-2 mx-0 my-0 rounded-md gap-1 bg-slate-800">
      <div className="flex-1 flex flex-col gap-1">
        <div className="flex-1 flex flex-wrap">
          <input
            size={text?.length - 2 || 2}
            className="flex-1d text-sm px-2 p-[2px] ring-1 bg-transparent rounded-md min-w-min "
            onInput={(e) => setText(e.target?.value)}
            value={text}
          />
          {trans && <TextView className="flex-none ring-1">{trans}</TextView>}
          {latin && <TextView className="flex-none ring-1">{latin}</TextView>}
        </div>
        <div className="flex">
          <But onClick={onTransHandler}>trans</But>
          <InputAudio onInput={setAud} value={aud} />
          <But onClick={() => setAns((p) => !p)}>ans : {ans?.toString()}</But>
          <But green onClick={onSaveHandler}>
            save
          </But>
        </div>
      </div>
      <InputFile onInput={setImg} value={img} />
    </Box>
  );
}
