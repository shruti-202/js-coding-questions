const cities = [
  { name: "New York", population: 853456 },
  { name: "Bangalore", population: 678956 },
  { name: "Los Angeles", population: 768756 },
];

const getCityNames = (userInput) => userInput.map(({ name }) => name);
console.log(getCityNames(cities));
