const students = [
  { name: "Aditya", score: 85 },
  { name: "Bob", score: 75 },
  { name: "Charlie", score: 90 },
];

const filterByScore = (userInput) =>
  userInput.filter(({ score }) => score > 80);
console.log(filterByScore(students));
