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
  const [rate, setRate] = useState(0);
  const [day, setDay] = useState(0);
  const [time, setTime] = useState("7:00:00");
  const [duration, setDuration] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!day || !studentName || !level || !subject) return;

    const newStudent = new StudentData(
      studentName,
      level,
      subject,
      rate,
      day,
      time,
      duration
    );
    students.addStudent(newStudent);
    setStudentList(students);
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

          <label>LESSON DAY</label>
          <select onChange={(e) => setDay(e.target.value)}>
            <option value={0}>SUNDAY</option>
            <option value={1}>MONDAY</option>
            <option value={2}>TUESDAY</option>
            <option value={3}>WEDNESSDAY</option>
            <option value={4}>THURSDAY</option>
            <option value={5}>FRIDAY</option>
            <option value={6}>SATURDAY</option>
          </select>
          <label>TIME</label>
          <select onChange={(e) => setTime(e.target.value)}>
            <option value={"7:00:00"}>7AM</option>
            <option value={"8:00:00"}>8AM</option>
            <option value={"9:00:00"}>9AM</option>
            <option value={"10:00:00"}>10AM</option>
            <option value={"11:00:00"}>11AM</option>
            <option value={"12:00:00"}>12PM</option>
            <option value={"13:00:00"}>1PM</option>
            <option value={"14:00:00"}>2PM</option>
            <option value={"15:00:00"}>3PM</option>
            <option value={"16:00:00"}>4PM</option>
            <option value={"17:00:00"}>5PM</option>
            <option value={"18:00:00"}>6PM</option>
            <option value={"19:00:00"}>7PM</option>
            <option value={"20:00:00"}>8PM</option>
            <option value={"21:00:00"}>9PM</option>
            <option value={"22:00:00"}>10PM</option>
            <option value={"23:00:00"}>11PM</option>
            <option value={"00:00:00"}>12AM</option>
            <option value={"1:00:00"}>1AM</option>
            <option value={"2:00:00"}>2AM</option>
            <option value={"3:00:00"}>3AM</option>
            <option value={"4:00:00"}>4AM</option>
            <option value={"5:00:00"}>5AM</option>
            <option value={"6:00:00"}>6AM</option>
          </select>
          <label>DURATION</label>
          <select onChange={(e) => setDuration(e.target.value)}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
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
