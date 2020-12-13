import './App.css';
import Header from './components/Header/Header';
import UnderBlock from './components/UnderBlock/UnderBlock';
import SearchBlock from './components/SearchBlock/SearchBlock';
import Books from './components/Books/Books';


function App() {
  const booksContent = [
    { 
      img: process.env.PUBLIC_URL + '/img/img1.png',
      title:"The Life Lessons",
      paragraph:"The Life Lessons is the book about self education and...",
      dollors:"$65",
      cents:"00"
    },
    {      
      img: process.env.PUBLIC_URL + '/img/img2.png',
      title:"The Untold Tales",
      paragraph:"One of the biggest art projects in the world of...",
      dollors:"$62",
      cents:"00"
    },
    {
      img: process.env.PUBLIC_URL + '/img/img3.png',
      title:"Hobbye Lobbye",
      paragraph:"A great story about politicians and their secret private life...",
      dollors:"$49",
      cents:"00"
    },
    {
      img: process.env.PUBLIC_URL + '/img/img4.png',
      title:"Where they sing",
      paragraph:"The best selling novel of all times about love and...",
      dollors:"$58",
      cents:"00"
    }
  ];


  return (
    <div className="App">
      <Header />
      <UnderBlock />
      <SearchBlock />
       <Books booksContent={booksContent}/>
    </div>
  );
}

export default App;
