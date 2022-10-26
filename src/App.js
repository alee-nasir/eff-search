import "./App.css";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div>
      <div className="App">
        <Navbar data-testid="navComponent" />
        <SearchBar data-testid="searchComponent" />
      </div>
    </div>
  );
}

export default App;
