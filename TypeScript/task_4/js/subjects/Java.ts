// task_4/js/subjects/Java.ts
/// <reference path="Teacher.ts" />
/// <reference path="Subject.ts" />
/// <reference path="Cpp.ts" />
/// <reference path="React.ts" />

namespace Subjects {
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  export class Java extends Subject {
    constructor(teacher: Teacher) {
      super(teacher);
    }

    getRequirements(): string {
      return "Here is the list of requirements for Java";
    }

    getAvailableTeacher(): string {
      if (this.teacher.experienceTeachingJava && this.teacher.experienceTeachingJava > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return "No available teacher";
      }
    }
  }
}
