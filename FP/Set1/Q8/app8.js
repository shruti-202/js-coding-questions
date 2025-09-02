const people = [
  { name: "Rahul", age: 25 },
  { name: "Raj", age: 35 },
  { name: "Vijay", age: 45 },
];

const filterByAge = (userInput) => userInput.filter(({ age }) => age > 30);
console.log(filterByAge(people));
