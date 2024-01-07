class StudentData {
  constructor(name, level, subject, rate, date, time, duration) {
    this.name = name;
    this.level = level;
    this.subject = subject;
    this.rate = rate;
    this.date = date;
    this.time = time;
    this.duration = duration;
    this.lessons = {};
    for (let i = 0; i < 4; i++) {
      this.createLessons();
    }
  }

  createLessons() {
    const id = crypto.randomUUID();
    const student = this;
    this.lessons[id] = new LessonData(
      id,
      student,
      this.date,
      this.time,
      this.duration
    );
  }
}

class LessonData {
  constructor(id, student, date, startTime, duration) {
    this.id = id;
    this.student = student;
    this.date = date;
    this.startTime = startTime;
    this.duration = duration;
  }
}

class AllStudentData {
  addStudent(student) {
    this[crypto.randomUUID()] = student;
  }
}

// class AllLessonData {
//   addLesson(lesson) {
//     this[lesson.id] = lesson;
//   }
// }

const students = new AllStudentData();

export { StudentData, LessonData, students };
