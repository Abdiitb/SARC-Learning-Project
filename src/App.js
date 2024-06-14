import Form from "./Form";
import SearchState from './Contexts/SearchState';

function App() {
  return (
    <SearchState>
    <div className="App">
     <Form/>
    </div>
    </SearchState>
  );
}

export default App;
