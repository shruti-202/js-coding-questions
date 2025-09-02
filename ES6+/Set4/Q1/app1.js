const arr = [1, 2, 3, 4, 5, 6, 9];

const getMaxElement = (userArr) => {
  let maxNum = userArr[0];
  let output = [];
  for (let i = 0; i < userArr.length; i++)
    if (maxNum > userArr[i]) {
      output = maxNum;
    } else {
      output = userArr[i];
    }
  return output;
};

console.log(getMaxElement(arr));
