import React, { useContext } from 'react'
import SearchResult from './SearchResult'
import searchContext from '../Contexts/SearchContext'
import '../FormInputs.css'

export default function SearchResultsList({ data, setData }) {
    const resultList = useContext(searchContext);

    return (
        <div className="form-input">
        <label style={{backgroundColor: 'rgb(34,34,34)', maxHeight: '670px', overflow: 'hidden'}} >
            {resultList.results.map((result) => {
                return <SearchResult result={result} key={result.id} data={data} setData={setData}/>
            })}
        </label>
        </div>
    )
}
