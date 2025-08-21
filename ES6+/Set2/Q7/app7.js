const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const combinedObjects = (userInput1, userInput2) => ({
  ...userInput1,
  ...userInput2,
});
console.log(combinedObjects(obj1, obj2));
