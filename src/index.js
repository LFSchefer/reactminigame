import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Rock from './components/Rock';
import Taquin from './components/Taquin';
import Tenzies from './components/Tenzies';

const Routing = () => {
  return(
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={App} />
        <Route path="/rock" element={Rock} />
        <Route path="/tenzies" element={Tenzies} />
      </Routes>
      <Footer/>
    </Router>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
