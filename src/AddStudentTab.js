import { useState } from "react";
import { StudentData } from "./data.js";
import { Button } from "./Button.js";

export function AddStudentTab({
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
