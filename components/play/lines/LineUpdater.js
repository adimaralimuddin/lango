import React from "react";
import Icon from "../../elements/Icon";
import LineEditor from "../../elements/LineEditor";
import useLines from "./useLines";

export default function LineUpdater({ data, set }) {
  const { updateLine, deleteLine } = useLines();

  const onSaveHandler = async (data_) => {
    const nData = {
      id: data?.id,
      ...data_,
    };
    await updateLine(nData, data);
    set?.(false);
  };
  return (
    <div className="ring-1 rounded-md">
      <small className="flex">
        <Icon onClick={() => deleteLine(data)}>trash</Icon>
        <Icon onClick={() => set(false)}>check</Icon>
      </small>
      <LineEditor data={data} onSave={onSaveHandler} set={set} />
    </div>
  );
}
