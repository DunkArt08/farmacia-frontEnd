import React from 'react'


function Navbar() {
 
  

  return (
    <>
     <div className='w-full bg-red-700 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <div className='text-2xl font-bold uppercase pl-5'>Farmacia</div>

            <div className='flex gap-4 px-5'>
              <div className='hover:underline'>Home</div>
              <div className='hover:underline'>Produtos</div>
              <div className='hover:underline'>Categorias</div>
              <div className='hover:underline'>Cadastrar Produto</div>
              <div className='hover:underline'>Cadastrar Tema</div> 
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar