import React from 'react'

const Search = ({handleChangeSearchInput, handleClickSearch}) => {
  return (
    <div>
        <input type="search" name='search-city' id='search-city' onChange={handleChangeSearchInput} />
        <button onClick={handleClickSearch}>Buscar</button>
    </div>
  )
}

export default Search