import Image from "next/image";
import React, { useState } from "react";
import { getLang, getVoice, translate, voices } from "../../../hooks/trans";
import usePlay from "../../../hooks/usePlay";
import But from "../../elements/But";
import Img from "../../elements/Img";
import Input from "../../elements/Input";
import InputAudio from "../../elements/InputAudio";
import InputFile from "../../elements/InputFile";
import Select from "../../elements/Select";
import TextView from "../../elements/TextView";
import PlayVoiceEditor from "../PlayVoiceEditor";

export default function DiagEditor({ data, onSave }) {
  // const [align, setAlign] = useState(data?.align || "center");
  const { lesson, code } = usePlay();
  const [text, setText] = useState(data?.text);
  const [trans, setTrans] = useState(data?.trans || "");
  const [latin, setLatin] = useState(data?.latin || "");
  const [img, setImg] = useState({ url: data?.img });
  const [aud, setAud] = useState({ url: data?.aud || "" });
  const [voice, setVoice] = useState(
    data?.voice
      ? data?.voice
      : getLang(code)?.voices?.find((v) => v?.align == "c")
  );

  const onSaveHandler = () => {
    if (!text || !voice) {
      return alert("no text found...");
    }
    const data_ = {
      text,
      trans,
      latin,
      img,
      aud,
      voice,
      // additional default property
      type: "diag",
      lesson,
    };
    onSave?.(data_);
  };

  return (
    <div className="flex-1 my-1 bg-slate-800 p-3 ring-2 ring-purple-400 rounded-xl">
      <div className="flex gap-2 flex-wrap ">
        <PlayVoiceEditor data={data} onInput={setVoice} />
        <div className="flex-1"></div>
        <div className="flex ">
          <InputFile value={img} onInput={setImg} />
          <InputAudio value={aud} onInput={setAud} />
          <But className=" px-3" green onClick={onSaveHandler}>
            save
          </But>
        </div>
      </div>
      <div className="flex flex-wrap items-center content-center">
        <Input onInput={setText} value={text} autoFocus />
        {trans && <TextView text={trans} className="ring-1" />}
        {latin && <TextView text={latin} className="ring-1" />}
      </div>
    </div>
  );
}
