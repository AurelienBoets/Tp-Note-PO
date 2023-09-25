import { Note } from "./Note.js";

export class NoteList {
  constructor() {
    this.list = [];
  }
  add(
    studentId,
    studentFirstName,
    studentLastName,
    subjectId,
    subjectName,
    number
  ) {
    let note = new Note(
      studentId,
      studentFirstName,
      studentLastName,
      subjectId,
      subjectName,
      number
    );
    this.list.push(note);
  }
  filter(studentId, subjectId) {
    let parent = document.createElement("tbody");
    let child = document.createElement("tr");
    if (studentId === "all" && subjectId === "all") {
      this.list.forEach((note) => {
        let render = `<td>${note.studentLastName}</td>
        <td>${note.studentLastName}</td>
        <td>${note.subjectName}</td>
        <td>${note.note}</td>`;
        child.innerHTML += render;
        parent.appendChild(child);
      });
    } else if (studentId === "all") {
      this.list.forEach((note) => {
        if (note.subjectId == subjectId) {
          let render = `<td>${note.studentLastName}</td>
        <td>${note.studentLastName}</td>
        <td>${note.subjectName}</td>
        <td>${note.note}</td>`;
          child.innerHTML += render;
          parent.appendChild(child);
        }
      });
    } else if (subjectId === "all") {
      this.list.forEach((note) => {
        if (note.studentId == studentId) {
          let render = `<td>${note.studentLastName}</td>
        <td>${note.studentLastName}</td>
        <td>${note.subjectName}</td>
        <td>${note.note}</td>`;
          child.innerHTML += render;
          parent.appendChild(child);
        }
      });
    } else {
      this.list.forEach((note) => {
        if (note.studentId == studentId && note.subjectId == subjectId) {
          let render = `<td>${note.studentLastName}</td>
        <td>${note.studentLastName}</td>
        <td>${note.subjectName}</td>
        <td>${note.note}</td>`;
          child.innerHTML += render;
          parent.appendChild(child);
        }
        console.log(parent);
      });
    }
    console.log(this.list);
    return parent;
  }
}
