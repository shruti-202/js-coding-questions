const product = {
  name: "Apple MacBook Air 2020",
  specification: {
    capacity: "256GB",
    size: "13.3 Inch",
  },
  price: 82900,
};

const productDetail = ({ name, specification: { capacity, size } }) =>
  `${name} which is of capacity ${capacity} has size of ${size}`;
console.log(productDetail(product));
