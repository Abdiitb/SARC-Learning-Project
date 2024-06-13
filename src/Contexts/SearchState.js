import SearchContext from "./SearchContext";
import { useState } from 'react';

const SearchState = (props) => {
    const [results, setResults] = useState([]);
    const [selected, setSelected] = useState([]);

    const updateResults = (value) => {
        setResults(value);
    }
    const updateSelected = (value) => {
        setSelected(value);
    }

    return (
        <SearchContext.Provider value={{results, selected, updateResults, updateSelected}}>
            {props.children}
        </SearchContext.Provider>
    )
}

export default SearchState;