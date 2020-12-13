import React from 'react';
import "./Books.css";
import BooksItems from "./BooksItems";

function Books ({booksContent}) {
 
  const booksElem = booksContent.map((book,index) => <BooksItems  key={index} book={book} />);

  return (
    <div className="books section--padding">
      <div className="books__title">
        <h2 className="books__bottomline">
          <span className="books__bottomline books__bottomline--orange">New</span> & Notable
        </h2>
      </div>
      <div className="books__columns">
        {
          booksElem
        }
      </div>  
    </div>
  )
}
export default Books;

