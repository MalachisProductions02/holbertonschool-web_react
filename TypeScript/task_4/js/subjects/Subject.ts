// task_4/js/subjects/Subject.ts
namespace Subjects {
  export class Subject {
    teacher: Teacher;

    constructor(teacher: Teacher) {
      this.teacher = teacher;
    }

    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}
