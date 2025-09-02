const numbers = [1, 2, 30, 4, 15];

const isDivisibleBy3and5 = (userInput) =>
  userInput.filter((num) => num % 3 === 0 && num % 5 === 0);
console.log(isDivisibleBy3and5(numbers));
