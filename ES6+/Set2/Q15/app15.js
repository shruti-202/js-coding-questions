const person1 = { name: "John", age: 25, occupation: "Software Engineer" };
const person2 = { name: "Jane", age: 45, occupation: "Data Analyst" };

const personDetails = ({ name, age }) => `${name} is ${age} years old`;

console.log(personDetails(person1));
console.log(personDetails(person2));
