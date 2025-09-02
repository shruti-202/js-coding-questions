const userData = { firstName: "John", lastName: "Dee" };

const getUserDetails = (userInput) => ({ ...userInput, teamID: 12345 });

console.log(getUserDetails(userData));
