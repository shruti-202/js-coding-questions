const personDetails = [
  { name: "John", age: 21 },
  { name: "Mary", age: 22 },
  { name: "Peter", age: 23 },
];

const getValues = (userInput, userProp) => {
  let arr = [];
  for (let i = 0; i < userInput.length; i++) {
    arr[i] = userInput[i][userProp];
  }
  return arr;
};

console.log(getValues(personDetails, "name"));
