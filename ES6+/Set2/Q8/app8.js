function getData(person) {
  const name = person.name;
  const address = person.address.city;
  console.log(name); // John Doe
  console.log(address); // New York
}

const person = {
  name: "John Doe",
  address: {
    city: "New York",
    state: "NY",
  },
};

const newFunction = ({ name, address: { city: address } }) => {
  console.log(name), console.log(address);
};
newFunction(person);
