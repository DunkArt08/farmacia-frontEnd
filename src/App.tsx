import React from 'react';
import './App.css';

import Navbar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './paginas/home/Home';
import ListaProduto from './components/produtos/listaproduto/ListaProduto';
import FormularioProduto from './components/produtos/formularioproduto/FormularioProduto';
import DeletarProduto from './components/produtos/deletarProduto/DeletarProduto';
import ListaCategoria from './components/categorias/listaCategoria/ListaCategoria';
import FormularioCategoria from './components/categorias/formularioCategoria/FormularioCategoria';
import DeletarCategoria from './components/categorias/deletarCategoria/DeletarCategoria';


function App() {
  return (
    <>
     <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/produtos" element={<ListaProduto />} />
            <Route path="/cadastroProduto" element={<FormularioProduto />} />
            <Route path="/editarProduto/:id" element={<FormularioProduto />} />
            <Route path="/deletarProduto/:id" element={<DeletarProduto />} />
            <Route path="/categoria" element={<ListaCategoria />} />
            <Route path="/cadastroCategoria" element={<FormularioCategoria />}/>
            <Route path="/editarCategoria/:id" element={<FormularioCategoria />}/>
            <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
            </Routes>
          </div>
          <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;