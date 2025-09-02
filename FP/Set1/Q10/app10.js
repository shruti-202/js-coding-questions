const people = [
  { name: "Ridhima", age: 75, city: "Indore" },
  { name: "Akshay", age: 60, city: "Delhi" },
  { name: "Shruti", age: 80, city: "Indore" },
  { name: "Shamu", age: 40, city: "Indore" },
  { name: "Venki", age: 80, city: "Bangalore" },
];

const filterByCityAndAge = (userInput) =>
  userInput.filter(({ city, age }) => city === "Indore" && age > 70);
console.log(filterByCityAndAge(people));
