const userData1 = {
  name: "Gaurav",
  postalCode: "12134",
  country: "Japan",
};

const getUserDetail = ({ name, country }) => `${name} lives in ${country}`;

console.log(getUserDetail(userData1));
