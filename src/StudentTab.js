import { useState } from "react";
import EditForm from "./EditForm.js";
import { Button } from "./Button.js";

export function StudentTab({ modal, handleStudentClick, students }) {
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
              ? Object.values(students[modal]?.lessons).map((lesson) => {
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
