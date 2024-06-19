import SearchContext from "./SearchContext";
import { useState } from 'react';

const SearchState = (props) => {
    const [results, setResults] = useState([]);
    const [selected, setSelected] = useState([]);
    const [input, setInput] = useState("");
    const [name, setName] = useState("");
    const [nameResults, setNameResults] = useState([]);
    const [displayName, setDisplayName] = useState("");

    const updateResults = (value) => {
        setResults(value);
    }
    const updateSelected = (value) => {
        setSelected(value);
    }

    return (
        <SearchContext.Provider value={{results, selected, input, name, nameResults, displayName, updateResults, updateSelected, setInput, setName, setNameResults, setDisplayName}}>
            {props.children}
        </SearchContext.Provider>
    )
}

export default SearchState;