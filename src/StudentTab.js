import { useEffect, useState } from "react";
import EditForm from "./EditForm.js";
import { Button } from "./Button.js";
import { LessonList } from "./LessonList.js";

export function StudentTab({ modal, handleStudentClick, students }) {
  const [showEditDetails, setEditDetails] = useState(null);
  const [curLessonId, setCurLessonId] = useState(null);
  let student = null;

  if (modal) {
    student = students[modal];
  }

  // const oneLevel = student.level;
  console.log("STUDENT", student);
  // console.log("LEVEL:", oneLevel);

  const [level, setLevel] = useState(student?.level);
  const [subject, setSubject] = useState(student?.subject);
  const [rate, setRate] = useState(student?.rate);

  // useEffect(function () {}, [student]);

  // WRONG MUST USE BRACKET
  // const curLesson = student?.lessons?.curLessonId;
  const curLesson = student?.lessons[curLessonId];

  function handleSubmitForm(e) {
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
              className={`studentDetails ${
                showEditDetails && "marginBottom noMarginTop"
              }`}
              onSubmit={(e) => handleSubmitForm(e)}
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
              {showEditDetails ? (
                <Button
                  onClick={handleSubmitForm}
                  customId={"marginTop"}
                  customClass={"noTransition"}
                >
                  Submit
                </Button>
              ) : (
                <Button onClick={handleSubmitForm}>EDIT ✏️</Button>
              )}
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
                  console.log("LESSON IS:", lesson);
                  return (
                    <li
                      key={lesson.id}
                      className={curLessonId === lesson.id ? "selected" : ""}
                      onClick={() => handleEdit(lesson.id)}
                    >
                      {console.log("DATE:", lesson.date)}
                      <p className="capitalise spread">
                        {curLessonId ? (
                          <>
                            {lesson.date.getDate()}{" "}
                            {lesson.date
                              .toLocaleString("default", { month: "short" })
                              .toUpperCase()}{" "}
                          </>
                        ) : (
                          <>
                            {lesson.date.getDate()}{" "}
                            {lesson.date
                              .toLocaleString("default", { month: "short" })
                              .toUpperCase()}{" "}
                            (
                            {lesson.date.toLocaleString("default", {
                              weekday: "short",
                            })}
                            ),{" "}
                            {lesson.startTime.split(":")[0] >= 12 ? (
                              <>{lesson.startTime.split(":")[0] - 12} pm</>
                            ) : (
                              <>{lesson.startTime.split(":")[0]} am</>
                            )}
                            {lesson.startTime.split(":")[1] !== "00" &&
                              lesson.startTime.split(":")[1]}{" "}
                            -{" "}
                            {lesson.startTime.split(":")[0] >= 12 ? (
                              <>
                                {lesson.startTime.split(":")[0] -
                                  12 +
                                  lesson.duration}{" "}
                                pm
                              </>
                            ) : (
                              <>
                                {parseInt(lesson.startTime.split(":")[0]) +
                                  lesson.duration}{" "}
                                am
                              </>
                            )}
                            {/* prettier-ignore */}
                            {"  "}[{lesson.duration}
                            {lesson.duration === 1 ? "hr" : "hrs"}]
                          </>
                        )}

                        {curLessonId && !(lesson.id === curLessonId) && (
                          <Button
                            onClick={() => handleEdit(lesson.id)}
                            customId="lessonEditButton"
                          >
                            ✏️
                          </Button>
                        )}
                      </p>
                      {!curLessonId && (
                        <Button onClick={() => handleEdit(lesson.id)}>
                          ✏️
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
