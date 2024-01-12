import { useState, useEffect } from "react";
import { Button } from "./Button";

export default function EditForm({
  curLesson,
  lessons,
  curLessonId,
  addLessons,
  onDeleteLesson,
}) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayNames = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  // console.log("EDITFORM:", curLesson);

  const placeholderDate = curLesson?.date.getDate();
  const placeholderDay = curLesson?.date.getDay();
  const placeholderMonth = curLesson?.date.getMonth();
  const placeholderDuration = curLesson?.duration;
  const placeholderStartTime = parseInt(curLesson.startTime);

  const placeholderYear = "20" + String(curLesson?.date.getYear() - 100);

  // const [date, setDate] = useState(placeholderDate);
  const [date, setDate] = useState("");

  const [month, setMonth] = useState(placeholderMonth);
  const [day, setDay] = useState(dayNames[placeholderDay]);
  const [startTime, setStartTime] = useState(placeholderStartTime);
  const [duration, setDuration] = useState(placeholderDuration);

  useEffect(() => {
    console.log("Lesson changed:", lessons); // Check if lessons is updating
  }, [lessons]);
  const id = crypto.randomUUID();

  function handleSubmit(e) {
    e.preventDefault();

    if (!date || !day || !startTime || !duration) return;

    setDate("");
    setDay("");
    setMonth("");
    setStartTime("");
    setDuration("");
  }
  // console.log("LESSONS:", lessons);
  return (
    <form
      onSubmit={handleSubmit}
      className={`editForm ${lessons && "slide-right"} `}
    >
      <h3>
        Edit {placeholderDate} {monthNames[placeholderMonth].slice(0, 3)}{" "}
        {placeholderYear} lesson
      </h3>
      <label>Date: </label>
      <input
        placeholder={`${placeholderDate} ${monthNames[month].slice(0, 3)}`}
        value={date}
        onChange={(e) => setDate(e.target.value)}
      ></input>
      <label>Day: </label>
      <input
        placeholder={placeholderDay}
        value={day}
        onChange={(e) => setDay(e.target.value)}
      ></input>

      <label>Duration: </label>
      <input
        placeholder={`${placeholderDuration} hr`}
        value={duration}
        onChange={(e) => setDuration(Number(e.target.value))}
      ></input>

      <label>Start Time: </label>
      <input
        placeholder={`${placeholderStartTime}${
          placeholderStartTime < 12 ? "am" : "pm"
        }`}
        value={startTime}
        onChange={(e) => setStartTime(e.target.value)}
      ></input>
      <Button customClass={"button"}>Submit</Button>
    </form>
  );
}
