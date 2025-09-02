const personDetails = { firstName: "Penn", lastName: "Ma" };

const checkStudentDetails = (userInput) =>
  userInput.team ? userInput : { ...userInput, team: "A" };
console.log(checkStudentDetails(personDetails));
console.log(
  checkStudentDetails({ firstName: "John", lastName: "Dee", team: "B" })
);
console.log(checkStudentDetails({ firstName: "Priya", lastName: "Raj" }));
