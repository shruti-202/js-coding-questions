const blog1 = {
  title: "How to Learn JavaScript",
  author: "John Doe",
  views: 1430,
};
const blog2 = {
  title: "10 Reasons to Start a Blog",
  author: "Jane Smith",
  views: 500,
};

const isBlog = ({ views }) => views > 1000;
console.log(isBlog(blog1));
console.log(isBlog(blog2));
