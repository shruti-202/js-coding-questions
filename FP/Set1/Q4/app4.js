const products = [
  { name: "Lip Balm", stock: 100 },
  { name: "Perfume", stock: 400 },
  { name: "Socks", stock: 200 },
];

const getProductName = (arr) => arr.map(({ name }) => name.toLowerCase());

console.log(getProductName(products));
