import { useEffect, useState } from "react";

const students = [
  { name: "Chao Keng EJ", level: "JC", subject: "H2 Math", rate: "$50/hr" },
  { name: "Jamie Vardy", level: "JC", subject: "H2 Math", rate: "$50/hr" },
  { name: "Zoom 60", level: "JC", subject: "H2 Math", rate: "$50/hr" },
  { name: "Shar", level: "JC", subject: "H2 Math", rate: "$50/hr" },
  { name: "Jamie Caragher", level: "JC", subject: "H2 Math", rate: "$50/hr" },
  { name: "Jamie Rednapp", level: "JC", subject: "H2 Math", rate: "$50/hr" },
  { name: "Cristiano", level: "JC", subject: "H2 Math", rate: "$50/hr" },
  { name: "Chao Keng EJ", level: "JC", subject: "H2 Math", rate: "$50/hr" },
  { name: "Jamie Vardy", level: "JC", subject: "H2 Math", rate: "$50/hr" },
  { name: "Zoom 60", level: "JC", subject: "H2 Math", rate: "$50/hr" },
  { name: "Shar", level: "JC", subject: "H2 Math", rate: "$50/hr" },
  { name: "Jamie Caragher", level: "JC", subject: "H2 Math", rate: "$50/hr" },
  { name: "Jamie Rednapp", level: "JC", subject: "H2 Math", rate: "$50/hr" },
  { name: "Cristiano", level: "JC", subject: "H2 Math", rate: "$50/hr" },
];

const lessons = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    date: "6 January 2024",
    day: "Thurs",
    time: "2pm - 4pm",
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    date: "10 Febuary 2024",
    day: "Mon",
    time: "2pm - 4pm",
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    date: "10 March 2024",
    day: "Fri",
    time: "2pm - 4pm",
  },
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    date: "10 January 2024",
    day: "Thurs",
    time: "2pm - 4pm",
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    date: "10 Febuary 2024",
    day: "Mon",
    time: "2pm - 4pm",
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    date: "10 March 2024",
    day: "Fri",
    time: "2pm - 4pm",
  },
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    date: "10 January 2024",
    day: "Thurs",
    time: "2pm - 4pm",
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    date: "10 Febuary 2024",
    day: "Mon",
    time: "2pm - 4pm",
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    date: "10 March 2024",
    day: "Fri",
    time: "2pm - 4pm",
  },
];

function App() {
  const [currentDate, setNewDate] = useState(new Date().getTime());
  useEffect(() => {
    const interval = setInterval(() => {
      setNewDate(new Date().getTime());
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className="app">
      <Reminders lessons={lessons} currentDate={currentDate}></Reminders>
      <StudentList students={students}></StudentList>
      <Stats></Stats>
    </div>
  );
}

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

function Reminders({ lessons, currentDate }) {
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
  return (
    <div className="sidebar">
      <div className="reminders-heading">
        <h1 className="heading">UPCOMING LESSONS</h1>
        <h3 className={Math.round(diffDays) <= 1 ? "date red" : "date green"}>
          {displayDiff} till next lesson
        </h3>
      </div>
      <LessonList lessons={lessons} currentDate={currentDate}></LessonList>
    </div>
  );
}

function LessonList({ lessons, currentDate }) {
  return (
    <div className="lessonlist">
      <ul>
        {lessons.map((lesson, i) => {
          return (
            <Lesson
              index={i}
              name={lesson.name}
              date={lesson.date}
              day={lesson.day}
              time={lesson.time}
              key={lesson.id}
              currentDate={currentDate}
            ></Lesson>
          );
        })}
      </ul>
    </div>
  );
}

function Lesson({ index, name, date, day, time, currentDate }) {
  const days = Math.floor((new Date(date) - currentDate) / (1000 * 24 * 3600));
  const hours = Math.round((new Date(date) - currentDate) / (1000 * 24 * 60));
  return (
    <li
      className={days <= 1 ? `red-background` : index % 2 ? `off-white-bg` : ``}
    >
      <div>
        <p>
          <span className="blue">{name.toUpperCase()}, </span>
          <span className="green">{date.slice(0, 2)}</span>
          <span className="black">{date.slice(2).toUpperCase()}</span>{" "}
          <span className="orange">({day.toUpperCase()})</span>,{" "}
          <span className="darker">{time.toUpperCase()}</span>{" "}
          <Button>EDIT ✏️</Button>
        </p>
        <p>
          <span className="red">
            [in {days === 0 ? `${hours} hour(s)` : `${days} day(s)`}]
          </span>
        </p>
      </div>
    </li>
  );
}

function StudentList({ students }) {
  return (
    <div>
      <h1 className="heading">STUDENTS</h1>
      <div className="studentlist">
        <ul>
          {students.map((student, i) => {
            return (
              <Student
                index={i}
                name={student.name}
                level={student.level}
                subject={student.subject}
                rate={student.rate}
              ></Student>
            );
          })}
          <li>
            <div className="add-student">
              <Button>ADD STUDENT ➕</Button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Student({ index, name, level, subject, rate }) {
  return (
    <li>
      <div className="student">
        <div className="studentname">
          <h1>{name.toUpperCase()}</h1>
        </div>
        <div>
          <span>{level.toUpperCase()}</span> |{" "}
          <span>{subject.toUpperCase()}</span> |{" "}
          <span>{rate.toUpperCase()}</span>
        </div>
      </div>
    </li>
  );
}

function Stats() {
  return (
    <div>
      <h1 className="heading">STATISTICS</h1>
      <div>
        <ul className="statslist">
          <li>
            <div>
              <Button>$100 total amount earned</Button>
            </div>
          </li>
          <li>
            <div>
              <Button>$100 total amount earned</Button>
            </div>
          </li>
          <li>
            <div>
              <Button>$100 total amount earned</Button>
            </div>
          </li>
          <li>
            <div>
              <Button>$100 total amount earned</Button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
