function defaultParamsFunc(a, b, c) {
  if (c === undefined) {
    c = 4;
  }
  return a * b * c;
}

const shortFunc = (a, b, c = 4) => a * b * c;
console.log(shortFunc(2, 2, 2));
console.log(shortFunc(7, 6));
