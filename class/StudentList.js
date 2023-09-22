import { Student } from "./Student.js";

export class StudentList {
  constructor() {
    this.list = [];
  }
  add(firstName, lastName) {
    let student = new Student(firstName, lastName);
    this.list.push(student);
  }
  render() {
    let option = "";
    this.list.forEach((student) => {
      option += `<option value=${student.id}>${student.firstName} ${student.lastName}</option>`;
    });
    return option;
  }
  search(id) {
    let student = {
      firstName: "",
      lastName: "",
    };
    this.list.forEach((element) => {
      if ((element.id = id)) {
        student.firstName = element.firstName;
        student.lastName = element.lastName;
      }
    });
    return student;
  }
}
