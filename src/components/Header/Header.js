import React from 'react'
import "./Header.css";
import logo from './logo.webp';

function Header() {
  let isAuth = false;

  return (
    <div className="headerblock">
        <div className="logo">
          <img src={logo} alt="logo" className="logo__item"/>
        </div>
        <div className="signIn">
            <button className="signIn__item" >{isAuth ? "Beka" : "Sign in"}</button>
        </div>
      <div className="navblock">
        <nav>
          <ul className="nav__list">
            <li className="nav__list__item">Home</li>
            <li className="nav__list__item">Pages</li>
            <li className="nav__list__item">About</li>
            <li className="nav__list__item">Events</li>
            <li className="nav__list__item">News</li>
            <li className="nav__list__item">Spaces & Rooms</li>
            <li className="nav__list__item">Store</li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header;
