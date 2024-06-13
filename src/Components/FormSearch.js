import React, { useContext } from 'react'
import Searchbar from './Searchbar'
import SearchResultsList from './SearchResultsList';
import SelectedOptionsList from './SelectedOptionsList';
import SearchContext from '../Contexts/SearchContext';
import './FormSearch.css'

export default function FormSearch() {
  const resultsList = useContext(SearchContext);

  return (
    <div className="searchTitle">
      <label htmlFor="exampleFormControlInput1" className="form-label">If you have chosen the option of customized yearbook in the above question, kindly mention the people whose profiles you want to have in your yearbook</label>

      <Searchbar />
      {resultsList && resultsList.results && resultsList.results.length > 0 && <SearchResultsList />}
      {resultsList && resultsList.selected && resultsList.selected.length > 0 && <SelectedOptionsList />}
    </div>
  )
}
