import { Lesson } from "./Lesson.js";

export function LessonList({ lessons, students, currentDate }) {
  console.log(lessons);
  return (
    <div className="lessonlist">
      <ul>
        {students
          ? lessons.map((lesson, i) => {
              return (
                <Lesson
                  index={i}
                  name={lesson.student?.name}
                  date={lesson.date}
                  time={lesson.startTime}
                  key={lesson.id}
                  currentDate={currentDate}
                ></Lesson>
              );
            })
          : ""}
      </ul>
    </div>
  );
}
