const arr = ["eat", "sleep", "code", "repeat"];

const capitalizedWords = (userInput) => {
  let output = [];
  for (let i = 0; i < userInput.length; i++) {
    output[i] = userInput[i].toUpperCase();
  }
  return output;
};

console.log(capitalizedWords(arr));
