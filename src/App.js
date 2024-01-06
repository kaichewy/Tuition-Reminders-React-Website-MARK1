import { useEffect, useState } from "react";
import { StudentData, LessonData } from "./data.js";

const students = [
  { name: "Chao Keng EJ", level: "JC", subject: "H2 Math", rate: "$50/hr" },
  { name: "Jamie Vardy", level: "JC", subject: "H2 Math", rate: "$50/hr" },
  { name: "Zoom 60", level: "JC", subject: "H2 Math", rate: "$50/hr" },
  { name: "Shar", level: "JC", subject: "H2 Math", rate: "$50/hr" },
  { name: "Jamie Caragher", level: "JC", subject: "H2 Math", rate: "$50/hr" },
  // { name: "Jamie Rednapp", level: "JC", subject: "H2 Math", rate: "$50/hr" },
  // { name: "Cristiano", level: "JC", subject: "H2 Math", rate: "$50/hr" },
  // { name: "Chao Keng EJ", level: "JC", subject: "H2 Math", rate: "$50/hr" },
  // { name: "Jamie Vardy", level: "JC", subject: "H2 Math", rate: "$50/hr" },
  // { name: "Zoom 60", level: "JC", subject: "H2 Math", rate: "$50/hr" },
  // { name: "Shar", level: "JC", subject: "H2 Math", rate: "$50/hr" },
  // { name: "Jamie Caragher", level: "JC", subject: "H2 Math", rate: "$50/hr" },
  // { name: "Jamie Rednapp", level: "JC", subject: "H2 Math", rate: "$50/hr" },
  // { name: "Cristiano", level: "JC", subject: "H2 Math", rate: "$50/hr" },
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
  // {
  //   id: 499476,
  //   name: "Anthony",
  //   image: "https://i.pravatar.cc/48?u=499476",
  //   date: "10 March 2024",
  //   day: "Fri",
  //   time: "2pm - 4pm",
  // },
  // {
  //   id: 118836,
  //   name: "Clark",
  //   image: "https://i.pravatar.cc/48?u=118836",
  //   date: "10 January 2024",
  //   day: "Thurs",
  //   time: "2pm - 4pm",
  // },
  // {
  //   id: 933372,
  //   name: "Sarah",
  //   image: "https://i.pravatar.cc/48?u=933372",
  //   date: "10 Febuary 2024",
  //   day: "Mon",
  //   time: "2pm - 4pm",
  // },
  // {
  //   id: 499476,
  //   name: "Anthony",
  //   image: "https://i.pravatar.cc/48?u=499476",
  //   date: "10 March 2024",
  //   day: "Fri",
  //   time: "2pm - 4pm",
  // },
  // {
  //   id: 118836,
  //   name: "Clark",
  //   image: "https://i.pravatar.cc/48?u=118836",
  //   date: "10 January 2024",
  //   day: "Thurs",
  //   time: "2pm - 4pm",
  // },
  // {
  //   id: 933372,
  //   name: "Sarah",
  //   image: "https://i.pravatar.cc/48?u=933372",
  //   date: "10 Febuary 2024",
  //   day: "Mon",
  //   time: "2pm - 4pm",
  // },
  // {
  //   id: 499476,
  //   name: "Anthony",
  //   image: "https://i.pravatar.cc/48?u=499476",
  //   date: "10 March 2024",
  //   day: "Fri",
  //   time: "2pm - 4pm",
  // },
];

function App() {
  const [currentDate, setNewDate] = useState(new Date().getTime());
  const [modal, setModal] = useState(false);
  const [addStudent, setAddStudent] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setNewDate(new Date().getTime());
    }, 1000);
    return () => clearInterval(interval);
  });

  function handleStudentClick(name) {
    if (name === modal) {
      setAddStudent(false);
      setModal(false);
    } else {
      setAddStudent(false);
      setModal(name);
    }
  }

  function handleAddStudentClick() {
    setModal(false);
    setAddStudent(true);
  }

  return (
    <div className="app">
      <Reminders
        lessons={lessons}
        currentDate={currentDate}
        modal={modal}
        addStudent={addStudent}
      ></Reminders>
      <StudentTab
        modal={modal}
        handleStudentClick={handleStudentClick}
      ></StudentTab>
      <AddStudentTab
        addStudent={addStudent}
        handleStudentClick={handleStudentClick}
      ></AddStudentTab>
      <StudentList
        students={students}
        handleStudentClick={handleStudentClick}
        addStudent={addStudent}
        handleAddStudentClick={handleAddStudentClick}
      ></StudentList>
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

function Reminders({ lessons, currentDate, modal, addStudent }) {
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
    <div className={modal || addStudent ? "sidebar hidden" : "sidebar"}>
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

function StudentList({
  students,
  handleStudentClick,
  addStudent,
  handleAddStudentClick,
}) {
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
                handleStudentClick={handleStudentClick}
              ></Student>
            );
          })}
          <li>
            <div className="add-student">
              <Button onClick={handleAddStudentClick}>ADD STUDENT ➕</Button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Student({ index, name, level, subject, rate, handleStudentClick }) {
  return (
    <li
      className={index % 2 ? "off-white-bg" : ""}
      key={index}
      onClick={() => handleStudentClick(name)}
    >
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

function StudentTab({ modal, handleStudentClick }) {
  return (
    <div className={modal ? "sidebar" : "sidebar hidden"}>
      <div className="reminders-heading">
        <h1 className="heading">{String(modal).toUpperCase()}</h1>
      </div>
      <div className="indiv-student">
        <div className="indiv-student-details">
          <h1 className="heading">DETAILS</h1>
          <ul>
            <li>
              <h3>LEVEL: JC2</h3>
            </li>
            <li>
              <h3>SUBJECT: H2 MATH</h3>
            </li>
            <li>
              <h3>RATE: $50/HR</h3>
            </li>
            <li>
              <h3>TOTAL EARNED: $500</h3>
            </li>
          </ul>
        </div>
        <div className="shortlessonlist">
          <h1 className="heading">UPCOMING LESSONS</h1>
          <ul className="off-white-bg">
            <li>
              <h3>10 JAN 2024</h3>
            </li>
            <li>
              <h3>10 JAN 2024</h3>
            </li>
            <li>
              <h3>10 JAN 2024</h3>
            </li>
            <li>
              <h3>10 JAN 2024</h3>
            </li>
          </ul>
        </div>
      </div>

      <div class="div-button-back-more">
        <Button>MORE LESSONS</Button>
      </div>

      <div class="div-button-back-reminders">
        <Button onClick={() => handleStudentClick(false)}>
          BACK TO REMINDERS
        </Button>
      </div>
    </div>
  );
}

function AddStudentTab({ addStudent, handleStudentClick }) {
  const [studentName, setStudentName] = useState("");
  const [level, setLevel] = useState("");
  const [subject, setSubject] = useState("");
  const [rate, setRate] = useState("");
  const [date, setDate] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!date || !studentName || !level || !subject) return;

    const newStudent = new StudentData(studentName, level, subject, rate);
    console.log(newStudent);
  }

  return (
    <div className={addStudent ? "sidebar" : "sidebar hidden"}>
      <div className="reminders-heading">
        <h1 className="heading">ADD STUDENT</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <label>NAME</label>
          <input
            type="text"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
          />
          <label>LEVEL</label>
          <input
            type="text"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
          />
          <label>SUBJECT</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <label>RATE</label>
          <input
            type="text"
            value={rate}
            onChange={(e) =>
              setRate(Number(e.target.value) ? Number(e.target.value) : 0)
            }
          />

          <label>LESSON DATE</label>
          <select onChange={() => setDate(date)}>
            <option value={date}>NIL</option>
            <option value={date}>SUNDAY</option>
            <option value={date}>MONDAY</option>
            <option value={date}>TUESDAY</option>
            <option value={date}>WEDNESSDAY</option>
            <option value={date}>THURSDAY</option>
            <option value={date}>FRIDAY</option>
            <option value={date}>SATURDAY</option>
          </select>
          <label>TIME</label>
          <select onChange={() => setDate(date)}>
            <option value={date}>NIL</option>
            <option value={date}>7AM</option>
            <option value={date}>8AM</option>
            <option value={date}>9AM</option>
            <option value={date}>10AM</option>
            <option value={date}>11AM</option>
            <option value={date}>12PM</option>
            <option value={date}>1PM</option>
            <option value={date}>2PM</option>
            <option value={date}>3PM</option>
            <option value={date}>4PM</option>
            <option value={date}>5PM</option>
            <option value={date}>6PM</option>
            <option value={date}>7PM</option>
            <option value={date}>8PM</option>
            <option value={date}>9PM</option>
            <option value={date}>10PM</option>
            <option value={date}>11PM</option>
            <option value={date}>12AM</option>
            <option value={date}>1AM</option>
            <option value={date}>2AM</option>
            <option value={date}>3AM</option>
            <option value={date}>4AM</option>
            <option value={date}>5AM</option>
            <option value={date}>6AM</option>
          </select>
          {/* <label>DURATION</label> */}
          <Button onClick={handleSubmit}>SAVE</Button>
        </form>
      </div>

      <div class="div-button-back-reminders">
        <Button onClick={() => handleStudentClick(false)}>
          BACK TO REMINDERS
        </Button>
      </div>
    </div>
  );
}

export default App;
