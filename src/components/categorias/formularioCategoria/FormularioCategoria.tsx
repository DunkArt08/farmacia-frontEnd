import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { buscar, atualizar, cadastrar } from '../../../services/Service';
import Categoria from '../../../models/Categoria';
import Produto from '../../../models/Produto';

function FormularioCategoria() {
    let navigate = useNavigate();

    const { id } = useParams<{ id: string }>();
  
    const [produtos, setProdutos] = useState<Produto[]>([]);
  
    const [produto, setProduto] = useState<Produto>({
        id:0,
        titulo:'',
        descricao:'',
        categoria: null
    });
  
    const [categoria, setCategoria] = useState<Categoria>({
        id: 0,
        nome: '',
        descricao: '',
        produto: null
    });
  
    async function buscarCategoriaPorId(id: string) {
      await buscar(`/categoria/${id}`, setCategoria);
    }
  
    async function buscarProdutoPorId(id: string) {
        await buscar(`/produto/${id}`, setProduto);
      }
  
    async function buscarProduto() {
      await buscar('/categoria', setProduto);
    }
  
    useEffect(() => {
      buscarProduto();
      if (id !== undefined) {
        buscarCategoriaPorId(id);
        console.log(produto);
  
      }
    }, [id]);
  
    useEffect(() => {
      setCategoria({
        ...categoria,
        produto: produto,
      });
    }, [produto]);
  
    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
      setCategoria({
        ...categoria,
        [e.target.name]: e.target.value,
        produto: produto
      });
    }
  
    function retornar() {
      navigate('/categoria');
    }
  
    async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
      e.preventDefault();
  
      console.log({ categoria });
  
      if (id != undefined) {
        try {
          await atualizar(`/categoria`, categoria, setCategoria);
          alert('Categoria atualizada com sucesso');
          retornar();
        } catch (error: any) {
          if (error.toString().includes('403')) {
            alert('Algum erro de requisição, tente novamente!')
          } else {
            alert('Erro ao atualizar a categoria');
          }
        }
      } else {
        try {
          await cadastrar(`/categoria`, categoria, setCategoria);
  
          alert('categoria cadastrada com sucesso');
          retornar();
        } catch (error: any) {
          if (error.toString().includes('403')) {
            alert('Erro na requisição, tente novamente!')
          } else {
            alert('Erro ao cadastrar a categoria');
          }
        }
      }
    }
  
    const carregandoCategoria = produto.descricao === '';
  
    return (
      <div className="container flex flex-col mx-auto items-center">
        <h1 className="text-4xl text-center my-8">{id !== undefined ? 'Editar Categoria' : 'Cadastrar categoria'}</h1>
  
        <form onSubmit={gerarNovaCategoria} className="flex flex-col w-1/2 gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="titulo">Titulo da categoria</label>
            <input
              value={categoria.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              type="text"
              placeholder="Titulo"
              name="titulo"
              required
              className="border-2 border-slate-700 rounded p-2"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="titulo">Descrição da categoria</label>
            <input
              value={categoria.descricao}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              type="text"
              placeholder="Texto"
              name="texto"
              required
              className="border-2 border-slate-700 rounded p-2"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p>Produtos da categoria</p>
            <select name="produto" id="produto" className='border p-2 border-slate-800 rounded' onChange={(e) => buscarProdutoPorId(e.currentTarget.value)}>
              <option value="" selected disabled>Selecione um produto</option>
              {produtos.map((produto) => (
                <>
                  <option value={produto.id} >{produto.descricao}</option>
                </>
              ))}
            </select>
          </div>
          <button disabled={carregandoCategoria} type='submit' className='rounded disabled:bg-slate-200 bg-indigo-400 hover:bg-indigo-800 text-white font-bold w-1/2 mx-auto block py-2'>
            {carregandoCategoria ? <span>Carregando</span> : id !== undefined ? 'Editar' : 'Cadastrar'}
          </button>
        </form>
      </div>
    );
  }

export default FormularioCategoria;