import React from 'react';
import FormularioPostagem from '../formularioproduto/FormularioProduto';

import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';

import './ModalProduto.css'

function ModalProduto() {
  return (
    <>
      <Popup 
      trigger={<button className='border rounded px-4 hover:bg-white hover:text-indigo-800'>Nova postagem</button>} modal>
        <div>
          <FormularioPostagem />
        </div>
      </Popup>
    </>
  );
}

export default ModalProduto;