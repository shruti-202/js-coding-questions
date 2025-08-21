const person1 = { name: "Ajay", age: 20 };

// const isEligible = (personDetails, userAge) => personDetails.age + userAge >=22
const isEligible = ({ age }, userAge) => age + userAge >= 22;
console.log(isEligible(person1, 6));
console.log(isEligible(person1, 1));
