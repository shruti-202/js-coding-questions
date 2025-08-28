const arr = [2, 5, 10, 15, 20, 27];

const printMultipleOfFive = (arrElement) => {
  for (let i = 0; i < arrElement.length; i++) {
    if (arrElement[i] % 5 === 0) return arrElement[i];
  }
};

const getFirstElement = (userArr) =>
  userArr.find((element) => element % 5 === 0);
console.log(getFirstElement(arr));
