import React, { useContext } from 'react'
import Searchbar from './Searchbar'
import SearchResultsList from './SearchResultsList';
import SelectedOptionsList from './SelectedOptionsList';
import SearchContext from '../Contexts/SearchContext';
// import './FormSearch.css'
import '../FormInputs.css'


export default function FormSearch({ data }) {
  const resultsList = useContext(SearchContext);

  return (
    <div className="form-input">
      <label htmlFor="exampleFormControlInput1">If you have chosen the option of customized yearbook in the above question, kindly mention the people whose profiles you want to have in your yearbook</label>

      <Searchbar />
      {resultsList && resultsList.results && resultsList.results.length > 0 && <SearchResultsList data={data}/>}
      {resultsList && resultsList.selected && resultsList.selected.length > 0 && <SelectedOptionsList />}
    </div>
  )
}
