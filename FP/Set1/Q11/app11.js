const books = [
  { title: "Dune", author: "Frank Herbert", genre: "Science Fiction" },
  { title: "1984", author: "George Orwell", genre: "Dystopian" },
  { title: "Foundation", author: "Isaac Asimov", genre: "Science Fiction" },
  { title: "Pride and Prejudice", author: "Jane Austen", genre: "Romance" },
];

const filterByGenre = (userInput, bookProp) =>
  userInput.filter(({ genre }) => genre === bookProp);
console.log(filterByGenre(books, "Science Fiction"));
console.log(filterByGenre(books, "Romance"));
