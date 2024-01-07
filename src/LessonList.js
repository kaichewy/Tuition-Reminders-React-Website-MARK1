import { Lesson } from "./Lesson.js";

export function LessonList({ lessons, students, currentDate }) {
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
                  time={lesson.time}
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
