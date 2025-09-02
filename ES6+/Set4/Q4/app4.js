let words = ["eat", "sleep", "code", "repeat", "neog", "community"];

const getMaxElement = (userArr) => {
  let output = [];
  for (let i = 0; i < userArr.length; i++)
    if (userArr[i].length > 5) {
      output[output.length] = userArr[i];
    }
  return output;
};
console.log(getMaxElement(words));
