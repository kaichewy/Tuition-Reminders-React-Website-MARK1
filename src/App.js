import { useEffect, useState } from "react";
import { LessonData, students } from "./data.js";
import { StudentTab } from "./StudentTab.js";
import { AddStudentTab } from "./AddStudentTab.js";
import { Stats } from "./Stats.js";
import { StudentList } from "./StudentList.js";
import { Reminders } from "./Reminders.js";

function App() {
  const [currentDate, setNewDate] = useState(new Date().getTime());
  const [studentlist, setStudentList] = useState(students);
  const [modal, setModal] = useState(false);
  const [addStudent, setAddStudent] = useState(false);
  const lessons = students
    ? Object.values(students).flatMap((student) =>
        Object.values(student.lessons)
      )
    : [];

  // TESTING students and lessons
  // useEffect(() => {
  //   function asdasd() {
  //     console.log("STUDENTS", students);
  //     console.log("LESSONS", lessons);
  //   }
  //   asdasd();
  // }, [students]);
  // console.log("STUDENTS", students);

  useEffect(() => {
    const interval = setInterval(() => {
      setNewDate(new Date().getTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  function handleStudentClick(studentID) {
    // console.log(studentID);
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

export default App;
