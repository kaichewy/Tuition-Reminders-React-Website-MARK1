class StudentData {
  constructor(name, level, subject, rate, day, time, duration) {
    this.name = name;
    this.level = level;
    this.subject = subject;
    this.rate = rate;
    this.day = day;
    this.time = time;
    this.duration = duration;
    this.lessons = {};
    for (let i = 0; i < 4; i++) {
      this.createLessons();
    }
  }

  createLessons() {
    const currentDate = new Date();
    // Calculate the difference between the current day and the desired day
    const diff = (this.day - currentDate.getDay() + 7) % 7;

    const targetDate = new Date();
    // Calculate the date by adding the difference to the current date
    targetDate.setDate(currentDate.getDate() + diff);
    const id = crypto.randomUUID();
    const student = this;
    const timing = this.time;
    this.lessons[id] = new LessonData(
      id,
      student,
      targetDate,
      timing,
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

const students = new AllStudentData();

export { StudentData, LessonData, students };
