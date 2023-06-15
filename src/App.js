import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Tenzies from './components/Tenzies';
import Rock from './components/Rock';
import Taquin from './components/Taquin';

// TODO
// btn => Play : Hide
//  taquin game 

function App() {
  return (
    <div className="App">
      <Navbar/>
      <hr/>
      <Rock/>
      <hr/>
      <Tenzies/>
      <hr/>
      <Taquin/>
      <hr/>
      <Footer/>
    </div>
  );
}

export default App;
