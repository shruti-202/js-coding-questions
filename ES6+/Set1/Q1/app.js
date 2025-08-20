const obj1 = {
  name: "Shruti",
  age: 26,
};

// const updateAge = newAge => obj1.age = newAge;
const updateNewAge = (newAge) => ({ ...obj1, age: newAge });

console.log(updateNewAge(35));
