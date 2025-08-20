const person = {
  Name: `Amit`,
  age: 25,
  occupation: `Software Engineer`,
};

const changeOccupation = (userObj, newOccupation) => ({
  ...userObj,
  occupation: newOccupation,
});
console.log(person);
const updatedOccupation = changeOccupation(person, "Data Engineer");
console.log(updatedOccupation);
