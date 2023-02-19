import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import NavBar from './components/NavBar';
import WeatherSection from './components/WeatherSection';
import Home from './components/Home';
import './App.css';
import Footer from './components/footer';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <WeatherSection/>
      <Routes>
        {/* <Route path="/weatherSection" element={<WeatherSection/>}/> */}
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
