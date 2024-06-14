import SearchContext from "./SearchContext";
import { useState } from 'react';

const SearchState = (props) => {
    const [results, setResults] = useState([]);
    const [selected, setSelected] = useState([]);
    const [selectedIds, setSelectedIds] = useState([]);

    const updateResults = (value) => {
        setResults(value);
    }
    const updateSelected = (value) => {
        setSelected(value);
    }

    return (
        <SearchContext.Provider value={{results, selected, selectedIds, updateResults, updateSelected, setSelectedIds}}>
            {props.children}
        </SearchContext.Provider>
    )
}

export default SearchState;