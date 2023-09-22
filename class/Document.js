import { StudentList } from "./StudentList.js";
import { NoteList } from "./NoteList.js";
import { SubjectList } from "./SubjectList.js";

export class Document {
  static init() {
    let studentList = new StudentList();
    let subjectList = new SubjectList();
    let noteList = new NoteList();
    let div = document.createElement("div");
    div.innerHTML = `<h1>- Liste de Notes -</h1> 
    <hr>
    <div>
      <div>
      <h3>Ajouter un Elève</h3>
      <button>off</button>
      </div>
      <div>
      <h3>Ajouter une Matière</h3>
      <button>off</button>
      </div>
      <div>
      <h3>Ajouter une Note</h3>
      <button>off</button>
    </div>
      </div>
      <hr>
      <div>
      <div id="formStudent">
        <input
          type="text"
          name="addFirstName"
          id="addFirstName"
          placeholder="Michèle"
        />
        <input
          type="text"
          name="addLastName"
          id="addLastName"
          placeholder="Dupont"
        />
        <button id=btnStudent>Ajouter un élève</button>
      </div>
      <div id="formSubject">
        <input type="text" name="addSubject" id="addSubject" />
        <button id=btnSubject>Ajouter une matière</button>
      </div>
      <div id="formNote">
        <select name="noteStudent" id="noteStudent">
          <option value="">Choississez un éléve</option>
        </select>
        <select name="noteSubject" id="noteSubject">
          <option value="">Choississez une matière</option>
        </select>
        <input type="number" name="addNote" id="addNote" />
        <button id=btnNote>Ajouter une note</button>
      </div>
    </div>
    <hr>
          <h1>Sélection</h1>
    <hr />
    <div>
      <label for="chooseStudent">Elève</label>
      <select name="chooseStudent" id="chooseStudent">
        <option value="all">Toutes la classe</option>
      </select>
      <label for="chooseSubject">Toutes les matières</label>
      <select name="chooseSubject" id="chooseSubject">
        <option value="all">Toutes les matières</option>
      </select>
    </div>
    <h1>Notes</h1>
    <hr />
    <table>
      <thead>
        <tr>
          <th>Nom</th>
          <th>Prenom</th>
          <th>Matière</th>
          <th>Note</th>
        </tr>
      </thead>
    </table>`;
    document.body.appendChild(div);
    let btnStudent = document.getElementById("btnStudent");
    let btnSubject = document.getElementById("btnSubject");
    let btnNote = document.getElementById("btnNote");
    let addFirstName = document.getElementById("addFirstName");
    let addLastName = document.getElementById("addLastName");
    let addSubject = document.getElementById("addSubject");
    let addNote = document.getElementById("addNote");
    let noteStudent = document.getElementById("noteStudent");
    let chooseStudent = document.getElementById("chooseStudent");
    let noteSubject = document.getElementById("noteSubject");
    let chooseSubject = document.getElementById("chooseSubject");
    let table = document.querySelector("table");

    btnStudent.addEventListener("click", () => {
      if (addFirstName != "" && addLastName != "") {
        studentList.add(addFirstName.value, addLastName.value);
        noteStudent.innerHTML = `<option value="">Choississez un éléve</option>`;
        noteStudent.innerHTML += studentList.render();
        chooseStudent.innerHTML = `<option value="all">Toutes la classe</option>`;
        chooseStudent.innerHTML += studentList.render();
        addFirstName.value = "";
        addLastName.value = "";
      }
    });

    btnSubject.addEventListener("click", () => {
      if (addSubject.value != "") {
        subjectList.add(addSubject.value);
        noteSubject.innerHTML = `<option value="">Choississez une matière</option>`;
        noteSubject.innerHTML += subjectList.render();
        chooseSubject.innerHTML = `<option value="all">Toutes les matières</option>`;
        chooseSubject.innerHTML += subjectList.render();
        addSubject.value = "";
      }
    });

    btnNote.addEventListener("click", () => {
      if (
        addNote.value > 0 &&
        addNote.value <= 20 &&
        noteSubject.value != "" &&
        noteStudent.value != ""
      ) {
        let student = studentList.search(noteStudent.value);
        let subject = subjectList.search(noteSubject.value);

        noteList.add(
          noteStudent.value,
          student.firstName,
          student.lastName,
          noteSubject.value,
          subject,
          addNote.value
        );
        noteStudent.value = "";
        noteSubject.value = "";
        addNote.value = "";
      }
    });

    chooseStudent.addEventListener("change", () => {
      if (!document.querySelector("tbody")) {
      } else {
        let tbody = document.querySelector("tbody");
        table.remove(tbody);
      }
      table.appendChild(
        noteList.filter(chooseStudent.value, chooseSubject.value)
      );
    });

    chooseSubject.addEventListener("change", () => {
      if (!document.querySelector("tbody")) {
      } else {
        let tbody = document.querySelector("tbody");
        table.remove(tbody);
      }
      table.appendChild(
        noteList.filter(chooseStudent.value, chooseSubject.value)
      );
    });
  }
}
