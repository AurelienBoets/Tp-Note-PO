export class Note {
  constructor(
    studentId,
    studentFirstName,
    studentLastName,
    subjectId,
    subjectName,
    note
  ) {
    this.studentId = studentId;
    this.subjectId = subjectId;
    this.note = note;
    this.studentFirstName = studentFirstName;
    this.studentLastName = studentLastName;
    this.subjectName = subjectName;
  }
}
