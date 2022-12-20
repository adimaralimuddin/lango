import React, { useState } from "react";
import usePlay from "../../../hooks/usePlay";
import But from "../../elements/But";
import Select from "../../elements/Select";

export default function LinesEditor({
  data,
  onSave,
  className,
  changed_ = false,
}) {
  const { lang, level, lesson } = usePlay();
  const [type, setType] = useState(data?.type || "select");
  const [side, setSide] = useState(data?.side || "img");
  const [ansSide, setAnsSide] = useState(data?.ansSide || "trans");
  const [opose, setOpose] = useState(data?.opose || false);
  // local state
  const [changed, setChanged] = useState(changed_);

  const onReset = () => {
    setType(data?.type || "select");
    setSide(data?.side || "img");
    setAnsSide(data?.ansSide || "trans");
    setOpose(data?.opose || false);
    setChanged(false);
  };

  const onSaveHandler = () => {
    const data_ = {
      type,
      side,
      ansSide,
      opose,
      // voice: voice(),
      // additional default property
      lang,
      level,
      lesson,
    };
    // console.log(data_);
    onSave?.(data_);
  };

  // function voice() {
  //   return getLang(code)?.voices?.find((v) => v?.align == "c");
  // }

  const onSelect = (data, setter) => {
    setter?.(data);
    setChanged(true);
  };

  return (
    <div className={"flex flex-wrap items-center py-2 " + className}>
      <Select
        onInput={(d) => onSelect(d, setType)}
        value={type}
        text="type"
        col={true}
      >
        <option value="select">select</option>
        <option value="match">match</option>
      </Select>
      <Select
        onInput={(d) => onSelect(d, setSide)}
        value={side}
        text="side"
        col={true}
      >
        <option value="img">img</option>
        <option value="text">text</option>
        <option value="trans">trans</option>
        <option value="latin">latin</option>
        <option value="aud">aud</option>
      </Select>
      <Select
        onInput={(d) => onSelect(d, setAnsSide)}
        value={ansSide}
        text="ansSide"
        col={true}
      >
        <option value="img">img</option>
        <option value="text">text</option>
        <option value="trans">trans</option>
        <option value="latin">latin</option>
        <option value="aud">aud</option>
      </Select>
      <small className="flex gap-1 flex-col">
        opose
        <But className={"m-1"} onClick={() => setOpose((p) => !p)}>
          {opose?.toString()}
        </But>
      </small>
      {changed && (
        <But green onClick={onSaveHandler}>
          save
        </But>
      )}
      {changed && (
        <But green onClick={onReset}>
          reset
        </But>
      )}
    </div>
  );
}
