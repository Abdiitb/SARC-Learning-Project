import React, { useContext } from 'react'
import NameResult from './nameResult'
import searchContext from '../Contexts/SearchContext'
// import '../FormInputs.css'

export default function NameResultsList({ data, setData }) {
    const resultList = useContext(searchContext);

    return (
        <div className="form-input">
        <label style={{backgroundColor: 'rgb(34,34,34)', maxHeight: '670px', overflow: 'hidden'}} >
            {resultList.nameResults.map((result) => {
                return <NameResult result={result} key={result.id} data={data} setData={setData}/>
            })}
        </label>
        </div>
    )
}
