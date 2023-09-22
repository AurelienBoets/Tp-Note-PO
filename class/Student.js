export class Student {
  constructor(firstName, lastName, id = Date.now()) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
  }
}
