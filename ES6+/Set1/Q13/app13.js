const book = {
  title: `Do Epic Shit`,
  author: `Ankur Warikoo`,
  pages: 312,
};

const getBookDetails = (userObj) => userObj.pages > 100;
console.log(getBookDetails(book));
