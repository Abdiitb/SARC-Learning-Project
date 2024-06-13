import React, { useContext } from 'react'
import SearchResult from './SearchResult'
import './SearchResultsList.css'
import searchContext from '../Contexts/SearchContext'

export default function SearchResultsList() {
    const resultList = useContext(searchContext);

    return (
        <div className="SearchResultsList">
            {resultList.results.map((result) => {
                return <SearchResult result={result} key={result.id}/>
            })}
        </div>
    )
}
