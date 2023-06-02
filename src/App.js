import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Tenzies from './components/Tenzies';
import Rock from './components/Rock';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <hr/>
      <Rock/>
      <hr/>
      <Tenzies/>
      <hr/>
      <Footer/>
    </div>
  );
}

export default App;
