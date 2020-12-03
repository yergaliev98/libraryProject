import './App.css';
import Header from './components/Header/Header';
import UnderBlock from './components/UnderBlock/UnderBlock';
import SearchBlock from './components/SearchBlock/SearchBlock';
import Books from './components/Books/Books';


function App() {
  return (
    <div className="App">
      <Header />
      <UnderBlock />
      <SearchBlock />
       <Books />
    </div>
  );
}

export default App;
