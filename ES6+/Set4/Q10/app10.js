var array = [
  {
    name: "Jay",
    age: 60,
  },
  {
    name: "Gloria",
    age: 36,
  },
  {
    name: "Manny",
    age: 16,
  },
  {
    name: "Joe",
    age: 9,
  },
];

const getSum = (userInput) => {
  let sum = 0;
  for (let i = 0; i < userInput.length; i++) {
    if (userInput[i].age) {
      sum += userInput[i].age;
    }
  }
  return sum;
};

console.log(getSum(array));
