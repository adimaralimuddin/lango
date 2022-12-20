import React, { useState } from "react";
import TextView from "../../elements/TextView";
import Img from "../../elements/Img";
import Aud from "../../elements/Aud";
import But from "../../elements/But";
import LineUpdater from "./LineUpdater";

export default function LineItemView({ data, className, editable = true }) {
  const [edit, setEdit] = useState(false);

  if (edit) return <LineUpdater data={data} set={setEdit} />;

  return (
    <div className={"flex ring-1 p-1 rounded-xl m-1 " + className}>
      <div className="flex-1 flex flex-cold">
        <TextView text={data?.text} className="flex-1" />
        <TextView text={data?.trans} className="flex-1" />
        <TextView text={data?.latin} className="flex-1" />
      </div>

      <div className="flex relative">
        {data?.ans && (
          <div className="p-2 ring-1 ring-white absolute z-10 rounded-full bg-green-500"></div>
        )}
        <Img src={data?.img} w="50px" h="50px" />
        <div className="flex flex-col">
          <Aud
            src={data?.aud}
            style={{ height: "20px" }}
            className=" ring-1 text-sm   m-0"
          />
          {editable && <But onClick={() => setEdit(true)}>edit</But>}
        </div>
      </div>
    </div>
  );
}
