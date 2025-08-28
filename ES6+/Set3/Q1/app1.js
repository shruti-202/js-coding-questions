const arr = [1, 2, 3, 4, 5];
const getArr = (userArr) =>
  `There are total ${userArr.length} items in the array and the first item is ${
    arr[0]
  } and last item is ${arr[arr.length - 1]}`;

console.log(getArr(arr));
