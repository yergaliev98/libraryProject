import React from 'react';
import "./Books.css";
import img1 from "./img/img1.png";
import img2 from "./img/img2.png";
import img3 from "./img/img3.png";
import img4 from "./img/img4.png";

function Books () {
  const booksContent = [
    { 
      img: img1,
      title:"The Life Lessons",
      paragraph:"The Life Lessons is the book about self education and...",
      dollors:"$65",
      cents:"00"
    },
    {      
      img:img2,
      title:"The Untold Tales",
      paragraph:"One of the biggest art projects in the world of...",
      dollors:"$62",
      cents:"00"
    },
    {
      img:img3,
      title:"Hobbye Lobbye",
      paragraph:"A great story about politicians and their secret private life...",
      dollors:"$49",
      cents:"00"
    },
    {
      img:img4,
      title:"Where they sing",
      paragraph:"The best selling novel of all times about love and...",
      dollors:"$58",
      cents:"00"
    }
  ]

  const booksElem = booksContent.map((item,index) => {
        return (
          <div className="books__elem"  key={index}>
            <div className="books__img__background">
              <img 
                className="books__img"
                src={item.img} 
                alt={item.title} 
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
              <h3>{item.title}</h3>
              <p className="books__description">{item.paragraph}</p>
              <p className="books__money">
                {item.dollors} 
                <sup>{item.cents}</sup>
              </p>
            </div>
          </div>
        )
  });

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

