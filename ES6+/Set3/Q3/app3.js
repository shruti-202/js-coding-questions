const personDetails = [
  { name: "Amay", age: 25 },
  { name: "Akhil", age: 25 },
];

const findPerson = (userObj, userInput) => {
  for (let i = 0; i < userObj.length; i++)
    if (userObj[i].name.toUpperCase() === userInput.toUpperCase()) {
      return userObj[i];
    }
  return null;
};

console.log(findPerson(personDetails, "Shruti"));
console.log(findPerson(personDetails, "Akhil"));
