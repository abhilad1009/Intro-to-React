import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";
// Variables
// const author = "John Doe";
// const title = "Book Title";
// const img =
//   "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Bamboo_book_-_binding_-_UCR.jpg/255px-Bamboo_book_-_binding_-_UCR.jpg";

const books = [
  {
    id: 1,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Bamboo_book_-_binding_-_UCR.jpg/255px-Bamboo_book_-_binding_-_UCR.jpg",
    title: "Book Title",
    author: "John Doe",
  },
  {
    id: 2,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Bamboo_book_-_binding_-_UCR.jpg/255px-Bamboo_book_-_binding_-_UCR.jpg",
    title: "Book2 Title",
    author: "Jane Doe",
  },
];
function BookList() {
  return (
    <section className="booklist">
      {books.map(function (book) {
        return (
          <Book
            key={book.id}
            img={book.img}
            title={book.title}
            author={book.author}
          ></Book>
        );
      })}
    </section>
  );
}

function Book(props, { children }) {
  // console.log(props);
  return (
    <article className="book">
      <img src={props.img} alt="" />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
