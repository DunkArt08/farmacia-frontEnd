import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
 
  

  return (
    <>
     <div className='w-full bg-red-700 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <div className='text-2xl font-bold uppercase pl-5'>Farmacia</div>
            <div className='flex gap-4 px-5'>
            <Link to='/home' className='hover:underline'>Home</Link>
              <Link to='/produto' className='hover:underline'>Produtos</Link>
              <Link to='/categoria' className='hover:underline'>Categoria</Link>
              <Link to='/cadastroProduto' className='hover:underline'>Cadastrar Produto</Link>
              <Link to='/cadastroCategoria' className='hover:underline'>Cadastrar Categoria</Link> 
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar