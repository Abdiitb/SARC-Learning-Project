import React, { useContext } from 'react'
import SearchResult from './SearchResult'
// import './SearchResultsList.css'
import searchContext from '../Contexts/SearchContext'
import '../FormInputs.css'

export default function SearchResultsList({ data }) {
    const resultList = useContext(searchContext);

    return (
        <div className="form-input">
        <label style={{backgroundColor: 'rgb(34,34,34)'}}>
            {resultList.results.map((result) => {
                return <SearchResult result={result} key={result.id} data={data}/>
            })}
        </label>
        </div>
    )
}
