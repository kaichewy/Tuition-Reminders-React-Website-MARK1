const lessonlist = [];
const studentlist = [];

class StudentData {
  constructor(name, level, subject, rate) {
    this.id = this.getId();
    this.name = name;
    this.level = level;
    this.subject = subject;
    this.rate = rate;
  }
  getId() {
    return crypto.randomUUID();
  }
}

class LessonData {
  constructor(student, date, startTime, duration) {
    this.student = student;
    this.date = date;
    this.startTime = startTime;
    this.duration = duration;
  }
}

class AllStudentData {
  constructor(student) {
    this.student.id = student;
  }
}

export { StudentData, LessonData, AllStudentData };
