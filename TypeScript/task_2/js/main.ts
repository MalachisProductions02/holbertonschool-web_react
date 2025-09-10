// Interfaces
interface Teacher {
  workTeacherTasks(): string;
}

interface Director {
  workDirectorTasks(): string;
}

function createEmployee(salary: number | string): Teacher | Director {
  if (typeof salary === 'number' && salary < 500) {
    return {
      workTeacherTasks: () => 'Getting to work',
    };
  } else {
    return {
      workDirectorTasks: () => 'Getting to director tasks',
    };
  }
}

function isDirector(employee: Teacher | Director): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

function executeWork(employee: Teacher | Director): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));

type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else {
    return 'Teaching History';
  }
}


console.log(teachClass('Math')); 
console.log(teachClass('History')); 

