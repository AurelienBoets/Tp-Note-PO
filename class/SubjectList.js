import { Subject } from "./Subject.js";

export class SubjectList {
  constructor() {
    this.list = [];
  }
  add(name) {
    let subject = new Subject(name);
    this.list.push(subject);
  }
  render() {
    let option = "";
    this.list.forEach((subject) => {
      option += `<option value=${subject.id}>${subject.name}</option>`;
    });
    return option;
  }

  search(id) {
    let subject = "";
    this.list.forEach((element) => {
      if (element.id == id) {
        subject = element.name;
      }
    });
    return subject;
  }
}
