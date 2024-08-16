import React from 'react';
import './App.css';

import Navbar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './paginas/home/Home';


function App() {
  return (
    <>
          <Navbar />
          <Home />
          <Footer />
    </>
  );
}
export default App;