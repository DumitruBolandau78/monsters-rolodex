import React from 'react';
import './SearchBox.css';

const SearchBox = ({ placeholder, changeHandler }) => {
  return (
    <input className='search-box' type="search" placeholder={placeholder} onChange={changeHandler} />
  )
}

export default SearchBox;