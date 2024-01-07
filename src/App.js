import { useEffect, useState } from "react";
import { StudentData, LessonData, students } from "./data.js";
import EditForm from "./EditForm.js";

function App() {
  const [studentlist, setStudentList] = useState(students);
  const [currentDate, setNewDate] = useState(new Date().getTime());
  const [modal, setModal] = useState(false);
  const [addStudent, setAddStudent] = useState(false);
  const lessons = students
    ? Object.values(students).flatMap((student) =>
        Object.values(student.lessons)
      )
    : [];

  console.log(lessons);
  useEffect(() => {
    const interval = setInterval(() => {
      setNewDate(new Date().getTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  function handleStudentClick(studentID) {
    console.log(studentID);
    if (studentID === modal) {
      setAddStudent(false);
      setModal(false);
    } else {
      setAddStudent(false);
      setModal(studentID);
    }
  }

  function handleAddStudentClick() {
    setModal(false);
    setAddStudent(!addStudent);
  }

  return (
    <div className="app">
      <Reminders
        lessons={lessons}
        students={students}
        currentDate={currentDate}
        modal={modal}
        addStudent={addStudent}
      ></Reminders>
      <StudentTab
        modal={modal}
        handleStudentClick={handleStudentClick}
        students={students}
      ></StudentTab>
      <AddStudentTab
        addStudent={addStudent}
        handleStudentClick={handleStudentClick}
        setStudentList={setStudentList}
        students={students}
      ></AddStudentTab>
      <StudentList
        students={studentlist}
        handleStudentClick={handleStudentClick}
        addStudent={addStudent}
        handleAddStudentClick={handleAddStudentClick}
      ></StudentList>
      <Stats></Stats>
    </div>
  );
}

export function Button({ children, onClick, customClass = "" }) {
  return (
    <button className={`button ${customClass}`} onClick={onClick}>
      {children}
    </button>
  );
}

function Reminders({ lessons, students, currentDate, modal, addStudent }) {
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
      <LessonList
        lessons={lessons}
        students={students}
        currentDate={currentDate}
      ></LessonList>
    </div>
  );
}

function LessonList({ lessons, students, currentDate }) {
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

function Lesson({ index, name, date, time, currentDate }) {
  const days = Math.floor((new Date(date) - currentDate) / (1000 * 24 * 3600));
  const hours = Math.round((new Date(date) - currentDate) / (1000 * 24 * 60));
  return (
    <li
      className={days <= 1 ? `red-background` : index % 2 ? `off-white-bg` : ``}
    >
      <div>
        <p>
          <span className="blue">{name}, </span>
          <span className="green">{date}</span>
          <span className="black">{date}</span>{" "}
          {/* <span className="orange">({day})</span>,{" "} */}
          <span className="darker">{time}</span> <Button>EDIT ✏️</Button>
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

function StudentList({ students, handleStudentClick, handleAddStudentClick }) {
  return (
    <div>
      <h1 className="heading">STUDENTS</h1>
      <div className="studentlist">
        <ul>
          {Object.entries(students)?.map((student, i) => {
            console.log(student);
            return (
              <Student
                index={i}
                student={student}
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

function Student({ index, student, handleStudentClick }) {
  return (
    <li
      className={index % 2 ? "off-white-bg" : ""}
      key={student[0]}
      onClick={() => handleStudentClick(student[0])}
    >
      <div className="student">
        <div className="studentname">
          <h1>{student[1].name.toUpperCase()}</h1>
        </div>
        <div>
          <span>{student[1].level.toUpperCase()}</span> |{" "}
          <span>{student[1].subject.toUpperCase()}</span> |{" "}
          <span>{student[1].rate}/HR</span>
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

function StudentTab({ modal, handleStudentClick, students }) {
  const [showEditLesson, setEditLesson] = useState(false);
  const [showEditDetails, setEditDetails] = useState(false);

  const [level, setLevel] = useState("JC2");
  const [subject, setSubject] = useState("H2 Math");
  const [rate, setRate] = useState("50");

  function handleEditDetails() {
    setEditDetails((prev) => !prev);
  }
  function handleEdit() {
    setEditLesson((cur) => !cur);
  }

  function handleClick(e) {
    console.log(e.target.value);
  }

  return (
    <div className={modal ? "sidebar" : "sidebar hidden"}>
      <div className="reminders-heading">
        <h1 className="heading">
          {String(students[modal]?.name).toUpperCase()}
        </h1>
      </div>
      <div className="indiv-student">
        <div
          className={`indiv-student-details ${showEditLesson ? "hidden" : ""}`}
        >
          <h1 className="heading">DETAILS</h1>
          <ul>
            <li>
              {showEditDetails ? (
                <input value={level}></input>
              ) : (
                <h3>LEVEL: {students[modal]?.level.toUpperCase()}</h3>
              )}
            </li>
            <li>{showEditDetails ? <p>Hi</p> : <h3>SUBJECT: {subject}</h3>}</li>
            <li>{showEditDetails ? <p>Hi</p> : <h3>RATE: ${rate}/HR</h3>}</li>
            <li>
              <h3>SUBJECT: {students[modal]?.subject.toUpperCase()}</h3>
            </li>
            <li>
              <h3>RATE: ${students[modal]?.rate}/HR</h3>
            </li>
            <li>
              <h3>TOTAL EARNED: $500</h3>
            </li>
          </ul>
        </div>
        <div className="shortlessonlist">
          <h1 className="heading">UPCOMING LESSONS</h1>
          <ul className="off-white-bg">
            {modal
              ? // ? Object.entries(students[modal]?.lessons).map((lesson) => {
                //     return (
                //       <li>
                //         {lesson[1].startTime}{" "}
                //         <Button onClick={handleEdit} customClass={"float-right"}>
                //           {showEditLesson ? "Close" : "Edit"}
                //         </Button>
                //       </li>
                //     );
                Object.values(students[modal]?.lessons).map((lesson) => {
                  return (
                    <li>
                      {lesson.date}
                      <Button onClick={handleEdit} customClass={"float-right"}>
                        {showEditLesson ? "Close" : "Edit"}
                      </Button>
                    </li>
                  );
                })
              : ""}
          </ul>
        </div>
        {showEditLesson && <EditForm />}
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

function AddStudentTab({
  addStudent,
  handleStudentClick,
  setStudentList,
  students,
}) {
  const [studentName, setStudentName] = useState("");
  const [level, setLevel] = useState("");
  const [subject, setSubject] = useState("");
  const [rate, setRate] = useState("");
  const [date, setDate] = useState("SUNDAY");
  const [time, setTime] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!date || !studentName || !level || !subject) return;

    const newStudent = new StudentData(
      studentName,
      level,
      subject,
      rate,
      date,
      time,
      "2hrs"
    );
    students.addStudent(newStudent);
    setStudentList(students);
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
          <select onChange={() => setTime(time)}>
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
