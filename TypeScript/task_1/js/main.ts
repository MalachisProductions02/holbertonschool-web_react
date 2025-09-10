class Teacher {
  firstName: string;
  lastName: string;
  location: string;
  fullTimeEmployee: boolean;

  constructor(firstName: string, lastName: string, location: string, fullTimeEmployee: boolean) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.location = location;
    this.fullTimeEmployee = fullTimeEmployee;
  }
}

interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);