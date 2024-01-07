export function Student({ index, student, handleStudentClick }) {
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
