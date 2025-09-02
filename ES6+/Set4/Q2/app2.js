const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const getAverage = (userArr) => {
  let sum = 0;
  let averageNum = 0;
  for (let i = 0; i < userArr.length; i++) {
    sum += userArr[i];
    averageNum = sum / userArr.length;
  }

  return averageNum;
};
console.log(getAverage(arr));
