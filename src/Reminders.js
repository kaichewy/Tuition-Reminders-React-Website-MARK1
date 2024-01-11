import { LessonList } from "./LessonList.js";

export function Reminders({
  lessons,
  students,
  currentDate,
  modal,
  addStudent,
}) {
  const diffDays =
    (new Date("6 January 2024 13:00:00") - currentDate) / (1000 * 3600 * 24);
  const diffHours = (diffDays - Math.floor(diffDays)) * 24;
  const diffMinutes = (diffHours - Math.floor(diffHours)) * 60;
  const diffSeconds = (diffMinutes - Math.floor(diffMinutes)) * 60;
  const displayDiff =
    Math.round(diffDays) <= 1
      ? `${Math.floor(diffHours)} hour(s) ${Math.floor(
          diffMinutes
        )} Minutes(s) ${Math.floor(diffSeconds)} Seconds(s)`
      : `${Math.floor(diffDays)} day(s) ${Math.floor(
          diffHours
        )} hour(s) ${Math.floor(diffMinutes)} Minutes(s) ${Math.floor(
          diffSeconds
        )} Seconds(s)`;
  let sortedLessons;
  sortedLessons = lessons
    .slice()
    .sort((a, b) => Number(a.date) - Number(b.date));
  return (
    <div className={modal || addStudent ? "sidebar hidden" : "sidebar"}>
      <div className="reminders-heading">
        <h1 className="heading">UPCOMING LESSONS</h1>
        <h3 className={Math.round(diffDays) <= 1 ? "date red" : "date green"}>
          {displayDiff} till next lesson
        </h3>
      </div>
      <LessonList
        lessons={sortedLessons}
        students={students}
        currentDate={currentDate}
      ></LessonList>
    </div>
  );
}
