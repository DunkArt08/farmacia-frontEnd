import React, { useContext, useEffect, useState } from 'react';
import CardProduto from '../cardprodutos/cardProduto';
import { buscar } from '../../../services/Service';
import Produto from '../../../models/Produto';
import { Dna } from 'react-loader-spinner';


function ListaProduto() {

    const [produto, setProdutos] = useState<Produto[]>([]);

    async function buscarProduto() {
        try {
          await buscar('/produto', setProdutos);
        } catch (error: any) {
          if (error.toString().includes('403')) {
            alert('Alguem erro na sua requisição, tente novamente')
          }
        }
      }
    
      useEffect(() => {
        buscarProduto();
      }, [produto.length]);
      return (
        <>
          {produto.length === 0 && (
            <Dna
              visible={true}
              height="200"
              width="200"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper mx-auto"
            />
          )}
          <div className='container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {produto.map((produto) => (
              <CardProduto key={produto.id} post={produto} />
            ))}
          </div>
        </>
      );
    }

export default ListaProduto;