import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Tenzies from './components/Tenzies';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <hr/>
      <Tenzies/>
      <hr/>
      <Footer/>
    </div>
  );
}

export default App;
