import React, { useState } from "react";
import useLesson from "../../hooks/useLesson";
import But from "../elements/But";
import LessonEditor from "./LessonEditor";

export default function LessonAdder() {
  const [open, setOpen] = useState(false);
  const { addLesson } = useLesson();

  const onSubmit = async (data) => {
    await addLesson(data);
    setOpen(false);
  };
  return (
    <div>
      <But onClick={() => setOpen(true)}>add Lesson</But>
      <LessonEditor onSubmit={onSubmit} open={open} set={setOpen} />
    </div>
  );
}
