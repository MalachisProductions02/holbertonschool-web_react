// task_4/js/main.ts
/// <reference path="subjects/Teacher.ts" />
/// <reference path="subjects/Subject.ts" />
/// <reference path="subjects/Cpp.ts" />
/// <reference path="subjects/React.ts" />
/// <reference path="subjects/Java.ts" />

const teacher1: Subjects.Teacher = {
  firstName: "John",
  lastName: "Doe",
  experienceTeachingC: 5,
};

const teacher2: Subjects.Teacher = {
  firstName: "Jane",
  lastName: "Smith",
  experienceTeachingReact: 3,
};

const teacher3: Subjects.Teacher = {
  firstName: "Alice",
  lastName: "Johnson",
  experienceTeachingJava: 2,
};

const cppSubject = new Subjects.Cpp(teacher1);
console.log(cppSubject.getRequirements());
console.log(cppSubject.getAvailableTeacher());

const reactSubject = new Subjects.React(teacher2);
console.log(reactSubject.getRequirements());
console.log(reactSubject.getAvailableTeacher());

const javaSubject = new Subjects.Java(teacher3);
console.log(javaSubject.getRequirements());
console.log(javaSubject.getAvailableTeacher());
