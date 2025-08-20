const checkForAlphabet = userInput => userInput.includes('A') || userInput.includes('a') ? `It has letter A` :`It do not have letter A`;

console.log(checkForAlphabet("Shruti"));
console.log(checkForAlphabet("Ayushi"))
