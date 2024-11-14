import React from 'react'

const SearchBar = ({searchTxt, setSearchTxt}) => {
  return (
    <input type='text' className='search-bar' placeholder='Pesquisar...' value={searchTxt} onChange={(e) => setSearchTxt(e.target.value)} />
  )
}

export default SearchBar