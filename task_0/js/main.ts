// 1. Interface definition
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// 2. Create two students
const student1: Student = {
  firstName: "Juan",
  lastName: "Pérez",
  age: 20,
  location: "Buenos Aires"
};

const student2: Student = {
  firstName: "Ana",
  lastName: "García",
  age: 22,
  location: "Madrid"
};

// 3. Store students in an array
const studentsList: Student[] = [student1, student2];

// 4. Create a table and add rows
const table = document.createElement("table");

// Add a header row (optional)
const headerRow = table.insertRow();
const nameHeader = document.createElement("th");
nameHeader.textContent = "First Name";
const locationHeader = document.createElement("th");
locationHeader.textContent = "Location";
headerRow.appendChild(nameHeader);
headerRow.appendChild(locationHeader);

// Add a row for each student
studentsList.forEach((student) => {
  const row = table.insertRow();
  const nameCell = row.insertCell();
  const locationCell = row.insertCell();

  nameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
});

// Append the table to the document body
document.body.appendChild(table);
