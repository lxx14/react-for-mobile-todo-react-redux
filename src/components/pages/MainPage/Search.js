import React from 'react';

const Search =() => {
  return (
    <div className='search-container'>
      <input type='text' placeholder='search by title'/>
      <button type="button"><i className="fas fa-search"></i></button>
    </div>
  )
}

export default Search;