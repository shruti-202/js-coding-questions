const userData = {
  name: "Jane Doy",
  postalCode: "12134",
  city: "Germany",
};

const getAddress = ({ postalCode, city }) => ({ postalCode, city });
console.log(getAddress(userData));
