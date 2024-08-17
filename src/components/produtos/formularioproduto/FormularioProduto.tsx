import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { buscar, atualizar, cadastrar } from '../../../services/Service';
import Produto from '../../../models/Produto';
import Categoria from '../../../models/Categoria';

function FormularioProduto() {
    let navigate = useNavigate();

    const { id } = useParams<{ id: string }>();
  
    const [categorias, setcategorias] = useState<Categoria[]>([]);
  
    const [categoria, setCategoria] = useState<Categoria>({
        id:0,
        nome:'',
        descricao:'',
        produto: null
    });
  
    const [produto, setProduto] = useState<Produto>({
        id: 0,
        titulo: '',
        descricao: '',
        categoria: null
    });
  
    async function buscarProdutoPorId(id: string) {
      await buscar(`/produto/${id}`, setProduto);
    }
  
    async function buscarCategoriaPorId(id: string) {
      await buscar(`/categoria/${id}`, setCategoria);
    }
  
    async function buscarCategoria() {
      await buscar('/categoria', setCategoria);
    }
  
    useEffect(() => {
      buscarCategoria();
      if (id !== undefined) {
        buscarProdutoPorId(id);
        console.log(categoria);
  
      }
    }, [id]);
  
    useEffect(() => {
      setProduto({
        ...produto,
        categoria: categoria,
      });
    }, [categoria]);
  
    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
      setProduto({
        ...produto,
        [e.target.name]: e.target.value,
        categoria: categoria
      });
    }
  
    function retornar() {
      navigate('/produtos');
    }
  
    async function gerarNovoProduto(e: ChangeEvent<HTMLFormElement>) {
      e.preventDefault();
  
      console.log({ produto });
  
      if (id != undefined) {
        try {
          await atualizar(`/produto`, produto, setProduto);
          alert('Produto atualizado com sucesso');
          retornar();
        } catch (error: any) {
          if (error.toString().includes('403')) {
            alert('Algum erro de requisição, tente novamente!')
          } else {
            alert('Erro ao atualizar o Produto');
          }
        }
      } else {
        try {
          await cadastrar(`/produto`, produto, setProduto);
  
          alert('Produto cadastrada com sucesso');
          retornar();
        } catch (error: any) {
          if (error.toString().includes('403')) {
            alert('Erro na requisição, tente novamente!')
          } else {
            alert('Erro ao cadastrar o Produto');
          }
        }
      }
    }
  
    const carregandoCategoria = categoria.descricao === '';
  
    return (
      <div className="container flex flex-col mx-auto items-center">
        <h1 className="text-4xl text-center my-8">{id !== undefined ? 'Editar Produto' : 'Cadastrar Produto'}</h1>
  
        <form onSubmit={gerarNovoProduto} className="flex flex-col w-1/2 gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="titulo">Titulo do produto</label>
            <input
              value={produto.titulo}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              type="text"
              placeholder="Titulo"
              name="titulo"
              required
              className="border-2 border-slate-700 rounded p-2"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="titulo">Descrição do Produto</label>
            <input
              value={produto.descricao}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              type="text"
              placeholder="Texto"
              name="texto"
              required
              className="border-2 border-slate-700 rounded p-2"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p>Categoria do produto</p>
            <select name="categoria" id="categoria" className='border p-2 border-slate-800 rounded' onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}>
              <option value="" selected disabled>Selecione uma Categoria</option>
              {categorias.map((categoria) => (
                <>
                  <option value={categoria.id} >{categoria.descricao}</option>
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

export default FormularioProduto;