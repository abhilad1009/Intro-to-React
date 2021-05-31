import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

// imports
import { books } from "./books";
import Book from "./Book";

function BookList() {
  return (
    <section className="booklist">
      {books.map(function (book) {
        return (
          <Book
            key={book.id}
            // img={book.img}
            // title={book.title}
            // author={book.author}
            {...book}
          ></Book>
        );
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
