import { useState, useEffect } from "react";
import { Button } from "./App";

export default function EditForm({
  el,
  lessons,
  curLesson,

  addLessons,
  onDeleteLesson,
}) {
  const [date, setDate] = useState("");
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  const [duration, setDuration] = useState(null);

  //   console.log(lessons);

  useEffect(() => {
    console.log("Lesson changed:", lessons); // Check if lessons is updating
  }, [lessons]);
  const id = crypto.randomUUID();
  //   const curLesson = lessons?.[1];
  // console.log(curLesson);

  function handleSubmit(e) {
    e.preventDefault();

    if (!date || !day || !time || !duration) return;

    // const newLesson = [`5`, { id, date, day, time, duration }];
    // console.log(newLesson);
    // onDeleteLesson(curLesson.id);
    // addLessons((lessons) => [newLesson, ...lessons]);

    setDate("");
    setDay("");
    setTime("");
    setDuration("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`editForm ${lessons ? "slide-right" : ""} `}
    >
      <h3>Edit 10 JAN 2024 lesson</h3>
      <label>Date: </label>
      <input
        placeholder={"10 Jan"}
        value={date}
        onChange={(e) => setDate(e.target.value)}
      ></input>
      <label>Day: </label>
      <input
        placeholder={"Thursday"}
        value={day}
        onChange={(e) => setDay(e.target.value)}
      ></input>

      <label>Duration: </label>
      <input
        placeholder={2}
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      ></input>

      <label>Time: </label>
      <input
        placeholder={"7.30pm - 9.30pm"}
        value={time}
        onChange={(e) => setTime(e.target.value)}
      ></input>
      <Button customClass={"button"}>Submit</Button>
    </form>
  );
}
