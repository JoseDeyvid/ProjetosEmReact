import React from 'react'
import { SearchButton, SearchInput, SearchContent } from './SearchStyles'

const Search = ({handleChangeSearchInput, handleClickSearch}) => {
  return (
    <SearchContent>
        <SearchInput type="search" name='search-city' id='search-city' onChange={handleChangeSearchInput} />
        <SearchButton onClick={handleClickSearch}>Buscar</SearchButton>
    </SearchContent>
  )
}

export default Search