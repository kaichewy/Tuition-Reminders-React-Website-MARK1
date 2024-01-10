import { useState } from "react";
import EditForm from "./EditForm.js";
import { Button } from "./Button.js";
import IndivLesson from "./IndivLesson.js";

export function StudentTab({ modal, handleStudentClick, students }) {
  const [showEditLesson, setEditLesson] = useState(false);
  const [showEditDetails, setEditDetails] = useState(null);
  const [curLessonId, setCurLessonId] = useState(null);

  const [level, setLevel] = useState("");
  const [subject, setSubject] = useState("");
  const [rate, setRate] = useState("");

  const student = students[modal];

  // WRONG MUST USE BRACKET
  // const curLesson = student?.lessons?.curLessonId;
  const curLesson = student?.lessons[curLessonId];

  // const duration = curLesson.duration;
  if (curLesson && curLesson["duration"]) {
    console.log("DURATION:", curLesson["duration"]);
  } else {
    console.log("Duration is undefined or null.");
  }

  console.log("STUDENT:", student);
  console.log("CURLESSON:", curLesson);
  // let numOfLessons = 0; // Declaring numOfLessons outside the conditional block

  // if (modal) {
  //   const modalStudent = students[modal];
  //   if (modalStudent && modalStudent.lessons) {
  //     numOfLessons = Object.values(modalStudent.lessons).length;
  //   }
  // }

  // console.log("LENGTH: ", numOfLessons);

  // console.log("LESSONS:", students[modal]?.lessons);

  function handleEditDetails() {
    setEditDetails((prev) => !prev);
  }

  function handleEdit(id) {
    console.log("STUDENTS: ", students);
    console.log("CURR ID: ", id);
    setCurLessonId(id);
    if (curLessonId === id) setCurLessonId(null);
    // if (!curLessonId) setCurLessonId((prev) => !prev);
    // setEditLesson((cur) => !cur);
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
            <li>
              {showEditDetails ? (
                <>
                  <p className="editDetailsP">Level:</p>
                  <input
                    placeholder={student?.level}
                    className="editDetailsInput"
                  ></input>
                </>
              ) : (
                <h3>Level: {student?.level}</h3>
              )}
            </li>
            <li>
              {showEditDetails ? (
                <>
                  <p className="editDetailsP">Subject:</p>
                  <input
                    placeholder={student?.subject}
                    className="editDetailsInput"
                  ></input>
                </>
              ) : (
                <h3>Subject: {student?.subject}</h3>
              )}
            </li>
            <li>
              {showEditDetails ? (
                <>
                  <p className="editDetailsP">Rate:</p>
                  <input
                    placeholder={`${student?.rate}/hr`}
                    className="editDetailsInput"
                  ></input>
                </>
              ) : (
                <h3>Level: ${student?.rate}/hr</h3>
              )}
            </li>

            <li>
              {/* <h3>TOTAL EARNED: $500</h3> */}
              <Button onClick={handleEditDetails}>
                {showEditDetails ? "Close" : "Edit Details"}
              </Button>
            </li>
          </ul>
        </div>
        <div className="shortlessonlist">
          <h1 className="heading">UPCOMING LESSONS</h1>
          <ul className="off-white-bg">
            {modal
              ? Object.values(student?.lessons).map((lesson) => {
                  // console.log(lesson.id);
                  return (
                    <li key={lesson.id}>
                      <IndivLesson
                        date={lesson.date.getDate()}
                        day={lesson.date.getDay()}
                        month={lesson.date.getMonth()}
                        startTime={lesson.startTime}
                        duration={lesson.duration}
                      />

                      <Button
                        onClick={() => handleEdit(lesson.id)}
                        customClass={"float-right"}
                      >
                        {curLessonId && lesson.id === curLessonId
                          ? "Close"
                          : "Edit"}
                      </Button>
                    </li>
                  );
                })
              : ""}
          </ul>
        </div>
        {curLessonId && (
          <EditForm
            // lessons={student?.lessons}
            // curLessonId={curLessonId}
            curLesson={curLesson}
          />
        )}
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
