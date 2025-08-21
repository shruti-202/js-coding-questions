const car1 = { make: "Porsche", model: "911", horsepower: 450 };
const car2 = { make: "Toyota", model: "Camry", horsepower: 200 };

const checkCar = ({ horsepower }) => horsepower >= 300;
console.log(checkCar(car1));
console.log(checkCar(car2));
