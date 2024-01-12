import { useEffect, useState } from "react";
import EditForm from "./EditForm.js";
import { Button } from "./Button.js";
import IndivLesson from "./IndivLesson.js";

export function StudentTab({ modal, handleStudentClick, students }) {
  const [showEditDetails, setEditDetails] = useState(null);
  const [curLessonId, setCurLessonId] = useState(null);
  let student = null;

  if (modal) {
    student = students[modal];
  }

  // const oneLevel = student.level;
  // console.log("STUDENT", student);
  // console.log("LEVEL:", oneLevel);

  const [level, setLevel] = useState(student?.level);
  const [subject, setSubject] = useState(student?.subject);
  const [rate, setRate] = useState(student?.rate);

  // useEffect(function () {}, [student]);

  // WRONG MUST USE BRACKET
  // const curLesson = student?.lessons?.curLessonId;
  const curLesson = student?.lessons[curLessonId];

  function handleEditDetails(e) {
    e.preventDefault();
    setEditDetails((prev) => !prev);
  }

  function handleEdit(id) {
    console.log("STUDENTS: ", students);
    console.log("CURR ID: ", id);
    setCurLessonId(id);
    if (curLessonId === id) setCurLessonId(null);
  }

  return (
    <div className={modal ? "sidebar" : "sidebar hidden"}>
      <div className="reminders-heading">
        <h1 className="heading">{String(student?.name).toUpperCase()}</h1>
      </div>
      <div className="indiv-student">
        <div className={`indiv-student-details ${curLessonId ? "hidden" : ""}`}>
          <h1 className="heading">DETAILS</h1>
          <ul>
            <i
              class={`fa ${!showEditDetails && "hidden"}`}
              onClick={() => setEditDetails((cur) => !cur)}
            >
              &#xf104;
            </i>

            <form
              className="studentDetails"
              onSubmit={(e) => handleEditDetails(e)}
            >
              {showEditDetails ? (
                <>
                  <div>
                    <p className="editDetailsP">Level:</p>
                    <input
                      placeholder={student.level}
                      className="editDetailsInput"
                      onChange={(e) => setLevel(e.target.value)}
                      value={level}
                    ></input>
                  </div>
                  <div>
                    <p className="editDetailsP">Subject:</p>
                    <input
                      placeholder={student.subject}
                      className="editDetailsInput"
                      onChange={(e) => setSubject(e.target.value)}
                      value={subject}
                    ></input>
                  </div>
                  <div>
                    <p className="editDetailsP">Rate:</p>
                    <input
                      placeholder={`${student.rate}`}
                      className="editDetailsInput"
                      onChange={(e) => setRate(e.target.value)}
                      value={rate}
                    ></input>
                  </div>
                </>
              ) : (
                <>
                  <h3>Level: {student?.level}</h3>
                  <h3>Subject: {student?.subject}</h3>
                  <h3>Rate: ${student?.rate}/hr</h3>
                </>
              )}
              <Button onClick={handleEditDetails}>
                {showEditDetails ? "Close" : "Edit Details"}
              </Button>
            </form>
          </ul>
        </div>
        <div className="shortlessonlist">
          <h1 className="heading">
            {curLessonId ? "LESSONS" : "UPCOMING LESSONS"}
          </h1>
          <ul className="off-white-bg">
            {modal
              ? Object.values(student?.lessons).map((lesson) => {
                  return (
                    <li
                      key={lesson.id}
                      className={curLessonId === lesson.id ? "selected" : ""}
                      onClick={() => handleEdit(lesson.id)}
                    >
                      <IndivLesson
                        id={lesson.id}
                        date={lesson.date.getDate()}
                        day={lesson.date.getDay()}
                        month={lesson.date.getMonth()}
                        startTime={lesson.startTime}
                        duration={lesson.duration}
                        curLessonId={curLessonId}
                      >
                        {!(lesson.id === curLessonId) && (
                          <Button onClick={() => handleEdit(lesson.id)}>
                            {curLessonId && lesson.id === curLessonId
                              ? "Close"
                              : "Edit"}
                          </Button>
                        )}
                      </IndivLesson>

                      {!curLessonId && (
                        <Button onClick={() => handleEdit(lesson.id)}>
                          Edit
                        </Button>
                      )}
                    </li>
                  );
                })
              : ""}
          </ul>
          {curLessonId && (
            <Button
              customId={"marginBottom"}
              onClick={() => setCurLessonId(null)}
            >
              Close
            </Button>
          )}
        </div>
        {curLessonId && <EditForm curLesson={curLesson} />}
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
