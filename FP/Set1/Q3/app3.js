const people = [
  { name: "Shruti", age: 25 },
  { name: "Vinit", age: 26 },
  { name: "Shashi", age: 29 },
];

const getAge = (userArr) => userArr.map(({ age }) => age);

console.log(getAge(people));
