const fruits = ["apple", "banana", "cherry", "pineapple", "ch"];

const filterLongStrings = (userInput) =>
  userInput.filter((word) => word.length > 5);
console.log(filterLongStrings(fruits));
