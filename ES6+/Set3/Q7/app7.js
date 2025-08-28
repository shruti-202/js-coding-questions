const arr = [1, 2, 3, 4, 5, 6, 7];

const getLastElements = (userInput) => {
  let output = [];
  if (userInput.length > 5) {
    for (let i = userInput.length - 5; i < userInput.length; i++) {
      output[output.length] = userInput[i];
    }
    return output;
  }
};

console.log(getLastElements(arr));
