const arr = [1, 2, 3, 4, 5, 6, 7];

const sumOfEvenIndices = (userInput) => {
  let sum = 0;
  for (let i = 0; i < userInput.length; i++)
    if (i % 2 === 0) {
      sum += userInput[i];
    }
  return sum;
};

console.log(sumOfEvenIndices(arr));
console.log(sumOfEvenIndices([2, 4, 3, 7, 1, 5]));
