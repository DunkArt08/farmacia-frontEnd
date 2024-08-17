import React, { useContext, useEffect, useState } from 'react';
import CardCategoria from '../cardCategoria/CardCategoria';
import { buscar } from '../../../services/Service';
import Categoria from '../../../models/Categoria';
import { Dna } from 'react-loader-spinner';


function ListaCategoria() {

    const [categoria, setCategoria] = useState<Categoria[]>([]);

    async function buscarCategoria() {
        try {
          await buscar('/categoria', setCategoria);
        } catch (error: any) {
          if (error.toString().includes('403')) {
            alert('Algum erro na sua requisição, tente novamente')
          }
        }
      }
    
      useEffect(() => {
        buscarCategoria();
      }, [categoria.length]);
      
      return (
        <>
        {categoria.length === 0 && (
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
          {categoria.map((categoria) => (
            <CardCategoria key={categoria.id} post={categoria} />
          ))}
        </div>
        </>
      );
    }

export default ListaCategoria;