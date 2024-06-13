import React, { useContext } from 'react'
import SelectedOption from './SelectedOption'
import SearchContext from '../Contexts/SearchContext'
import './SelectedOptionsList.css'


export default function SelectedOptionsList() {
    const selectedList = useContext(SearchContext);

    return (
        <>
        <div>People Added</div>
        <div className="selectedList">
            
            <ul>
                
                {selectedList.selected && selectedList.selected.map((element) => {
                    return (
                        <SelectedOption option={element} key={element.id}/>
                    )
                })}
            </ul>
        </div>
        </>
    )
}
