import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";
// Variables
const author = "John Doe";
const title = "Book Title";
const img =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Bamboo_book_-_binding_-_UCR.jpg/255px-Bamboo_book_-_binding_-_UCR.jpg";
function BookList() {
  return (
    <section className="booklist">
      <Book job="developer" />
      <Book />
    </section>
  );
}

function Book(props) {
  console.log(props);
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <p>{props.job}</p>
    </article>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
