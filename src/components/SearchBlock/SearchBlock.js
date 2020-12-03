import React from 'react'
import Search from './Search';

function SearchBlock() {
  return (
    <div className="searchblock">
      <Search />
      <div className="searchblock searchblock--date">
        <p>The library is open today</p>
        <p>6:00 AM - 8:00 PM</p>
      </div>
    </div>
  )
}

export default SearchBlock;
