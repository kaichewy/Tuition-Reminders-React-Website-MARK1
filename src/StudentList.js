import { Student } from "./Student.js";
import { Button } from "./Button.js";

export function StudentList({
  students,
  handleStudentClick,
  handleAddStudentClick,
}) {
  return (
    <div>
      <h1 className="heading">STUDENTS</h1>
      <div className="studentlist">
        <ul>
          {Object.entries(students)?.map((student, i) => {
            return (
              <Student
                index={i + 1}
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
