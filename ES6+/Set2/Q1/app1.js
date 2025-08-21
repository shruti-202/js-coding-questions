const personDetails = {
  name: "Shruti",
  age: 26,
};

const updateAge = (newAge) => ({ ...personDetails, age: newAge });
console.log(personDetails);
const newDetails = updateAge(30);
console.log(newDetails);
console.log(personDetails);
