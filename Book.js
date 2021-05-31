import React from "react";

function Book(props, { children }) {
  // attribute, eventHandler
  // onClick, onMouseOver
  const clickHandler = function (e) {
    console.log(e);
    console.log(e.target);
    alert("Helloworld");
  };

  const complex = function (author) {
    console.log(author);
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(props.title);
      }}
    >
      <img src={props.img} alt="" />
      <h1
        onClick={function () {
          console.log(props.title);
        }}
      >
        {props.title}
      </h1>
      <h4>{props.author}</h4>
      <button type="button" onClick={clickHandler}>
        Alert
      </button>
      <button type="button" onClick={() => complex(props.author)}>
        Complex
      </button>
    </article>
  );
}
export default Book;
