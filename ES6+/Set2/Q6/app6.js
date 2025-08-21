function add(a = 30, b = 0) {
  return a + b;
}

const newAdd = (a = 30, b = 0) => a + b;
console.log(newAdd(2, 8));
