import { useState } from "react";

export default function IndivLesson({
  id,
  date,
  day,
  month,
  duration,
  startTime,
  curLessonId,
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

  duration = parseInt(duration);
  startTime = parseInt(startTime);
  const endTime = parseInt(startTime) + duration;
  const curMonth = monthNames[month];
  const curDay = dayNames[day];

  return curLessonId ? (
    <p>
      {date} {curMonth.slice(0, 3)}
    </p>
  ) : (
    <p className="indivLesson">
      {date} {curMonth.slice(0, 3)} (
      {curDay === "Tuesday" ? "Tues" : curDay.slice(0, 3)}),{" "}
      {startTime < 12 ? `${startTime}am` : `${startTime}pm`} -{" "}
      {endTime < 12 ? `${endTime}am` : `${endTime}pm`} (
      {duration === 1 ? `${duration}hr` : `${duration}hrs`})
    </p>
  );
  //   return (
  //     <p>
  //       {date} {curMonth.slice(0, 3)} (
  //       {curDay === "Tuesday" ? "Tues" : curDay.slice(0, 3)}),{" "}
  //       {startTime < 12 ? `${startTime}am` : `${startTime}pm`} -{" "}
  //       {endTime < 12 ? `${endTime}am` : `${endTime}pm`} (
  //       {duration === 1 ? `${duration}hr` : `${duration}hrs`})
  //     </p>
  //   );
}
