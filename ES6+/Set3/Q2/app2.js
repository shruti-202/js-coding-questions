//2. Create a function that takes a product object as an argument and returns a string
// that includes the product name, price, and a message based on whether it is in stock or not.

const productDetails = {
  productName: "Gucci",
  price: 100000,
  inStock: true,
};

const productDetail = {
  productName: "Socks",
  price: 908,
  inStock: false,
};

const getProductDetails = ({ productName, price, inStock }) =>
  `${productName} costs ${price} INR and it is ${
    inStock ? `in stock` : `out of stock`
  }`;
console.log(getProductDetails(productDetails));
console.log(getProductDetails(productDetail));
