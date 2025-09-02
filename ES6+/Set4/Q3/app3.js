const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const convertNumber = (userArr) => {
  for (let i = 0; i < userArr.length; i++) {
    if (userArr[i] % 2 === 0) {
      userArr[i] = userArr[i] + 1;
    }
  }
  return userArr;
};

console.log(convertNumber(arr));
