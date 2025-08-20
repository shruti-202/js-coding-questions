//Write a function that takes a number as input and determines if it is even or odd.

const checkNum = num => num % 2 === 0 ? `Num ${num} is Even` : `Num ${num} is Odd`
console.log(checkNum(48));
console.log(checkNum(5))