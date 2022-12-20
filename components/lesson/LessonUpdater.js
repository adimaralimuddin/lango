import React, { useState } from "react";
import useLesson from "../../hooks/useLesson";
import Icon from "../elements/Icon";
import LessonEditor from "./LessonEditor";

export default function LessonUpdater({ data }) {
  const [open, setOpen] = useState(false);
  const { updateLesson } = useLesson();

  const onUpdateHandler = async ({ langId, levelId, ...data_ }) => {
    await updateLesson(data_, data);
    setOpen(false);
  };

  return (
    <div className="flex">
      <Icon onClick={() => setOpen((p) => !p)}>pencil</Icon>
      <LessonEditor
        onSubmit={onUpdateHandler}
        data={data}
        open={open}
        set={setOpen}
      />
    </div>
  );
}
