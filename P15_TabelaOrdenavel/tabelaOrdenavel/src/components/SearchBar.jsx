import React from 'react'

const SearchBar = ({searchTxt, setSearchTxt}) => {
  return (
    <input type='text' placeholder='Pesquisar...' value={searchTxt} onChange={(e) => setSearchTxt(e.target.value)} />
  )
}

export default SearchBar