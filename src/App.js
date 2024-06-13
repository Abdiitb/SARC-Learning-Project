import './App.css';
import FormSearch from './Components/FormSearch';
import SearchState from './Contexts/SearchState';

function App() {
  return (
    <SearchState>
    
    <div className="App">
      <FormSearch />      
    </div>
    </SearchState>
  );
}

export default App;
