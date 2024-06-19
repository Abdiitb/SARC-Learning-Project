import React, { useContext } from 'react'
import NameSearch from './nameSearch'
import NameResultsList from './nameResultsList';
// import SelectedOptionsList from '../SelectedOptionsList';
import SearchContext from '../Contexts/SearchContext';
// import '.../FormInputs.css'


export default function FullName({ data, setData }) {
  const resultsList = useContext(SearchContext);

  return (
    <div className="form-input">
      <label htmlFor="exampleFormControlInput1">Full Name</label>

      <NameSearch />
      {resultsList && resultsList.nameResults && resultsList.nameResults.length > 0 && <NameResultsList data={data} setData={setData}/>}
      {/* {resultsList && resultsList.selected && resultsList.selected.length > 0 && <SelectedOptionsList data={data} setData={setData}/>} */}
    </div>
  )
}
