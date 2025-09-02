const people = [
  { name: "Alice", age: 12, salary: 30000 },
  { name: "David", age: 20, salary: 25000 },
  { name: "Sophia", age: 35, salary: 40000 },
  { name: "Rahul", age: 32, salary: 28000 },
  { name: "Maya", age: 27, salary: 26000 },
  { name: "Ethan", age: 40, salary: 50000 },
];

const filteredEmployee = (userInput) =>
  userInput.filter(({ age, salary }) => salary > 22000 && age > 25);
console.log(filteredEmployee(people));
