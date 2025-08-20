
const checkNum = num => num > 0 ? `Num ${num} is Positive` : num === 0 ? `Num ${num} is Zero` : `Num ${num} is Negative`;
console.log(checkNum(-9))
console.log(checkNum(19));
console.log(checkNum(0))