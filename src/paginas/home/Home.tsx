import React from 'react';
import homeLogo from '../../assets/home.png'
import './Home.css';
import ListaProduto from '../../components/produtos/listaproduto/ListaProduto';
import ModalProduto from '../../components/produtos/modalproduto/ModalProduto';


function Home() {
    return (
        <>
        <div className="bg-red-600 flex justify-center py-10">
          <div className='container grid grid-cols-2 text-white'>
          <div className="flex justify-center ">
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOQpIs1Lxg4Q1ElD-LjlKQXuPvDUErdoPN7g&s' alt="" className='w-2/3 rounded-full' />
      
            </div>
            
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Sejam bem vindos!</h2>
              <p className='text-xl'>Melhores preços em remédio do mercado!</p>
              <div className="flex justify-around gap-4">
              
                <button className='rounded bg-white text-red-800 py-2 px-4'>Ver postagens</button>
              </div>
            </div>
  
           
          </div>
        </div>
        <ListaProduto />
      </>
    );
}

export default Home;