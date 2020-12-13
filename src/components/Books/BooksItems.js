import React from 'react'

export default function BooksItems({book}) {
  return (
    <div className="books__elem">
            <div className="books__img__background">
              <img 
                className="books__img"
                src={book.img} 
                alt={book.title} 
              />
              <div className="img__overlay">
              </div>
              <div className="img__icons">
                <div className="img__item">
                    <i className="fas fa-cart-plus"></i>
                  </div>
                <div className="img__item">
                    <i className="fas fa-unlink"></i>
                </div>
              </div>
            </div>
            <div className="books__data">
              <h3>{book.title}</h3>
              <p className="books__description">{book.paragraph}</p>
              <p className="books__money">
                {book.dollors} 
                <sup>{book.cents}</sup>
              </p>
            </div>
          </div>
  )
}

