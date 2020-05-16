import React, { useState, useEffect } from 'react';

import { useParams, useHistory } from 'react-router-dom';
import getToken from '../../components/getToken';

import api from '../../services/api';

import './style.css';

function Post ({ isNew }) {
  const [title, setTitle] = useState(''); 
  const [date] = useState(new Date());
  const [description, setDescription] = useState(''); 
  const [content, setContent] = useState('');
  const [id_category, setIdCategory] = useState(0);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState('');

  const { id } = useParams();
  const { type } = useParams();

  const AuthStr = getToken();

  const history = useHistory();

  useEffect(() => {
    if(isNew) {
      async function handleCategory () {
        try {
          const response = await api.get('categories', {
            headers: {
              'Authorization': AuthStr
            }
          });
  
          setCategories(response.data);
        }
        catch (err) {
          alert('Não foi possível buscar Categorias.');
          console.log(err);
        }
      }
  
      handleCategory();
    } else {
      async function getPostInfos() {
        try {
          const response = await api.get(`/post/${id}`, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': AuthStr
            }
          });
  
          setTitle(response.data.title);
          setDescription(response.data.description);
          setContent(response.data.content);
          //TODO -> Fix, it's not setting id_category
          // setIdCategory(response.data.id_category);
  
          getCategoryInfos(response.data.id_category);
        }
        catch (err) {
          alert('Não foi possível Buscar o Post.');
          console.log(err);
        }
      }
  
      async function getCategoryInfos (pId) {
        try {
          const response = await api.get(`/category/${pId}`, {
            headers: {
              'Authorization': AuthStr
            }
          });
  
          setCategory(response.data.description);
        }
        catch (err) {
          alert('Não foi possível Buscar a Categoria.');
          console.log(err);
        }
      }
  
      getPostInfos();
    }
  // eslint-disable-next-line
  }, [isNew]);

  async function handleNewPost (e){
    e.preventDefault();

    console.log(date)

    if(isNew) {
      try {
        await api.post('/post', {
            title,
            date,
            description,
            content,
            id_category
          },
          {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': AuthStr
          }
        });
  
        alert(`Post ${title} incluída com sucesso`);
      }
      catch (err) {
        alert('Não foi possível Cadastrar o Post.');
        console.log(err);
      }   
    }
    
    history.push('/home');    
  }

  function handleSelectedCategory(e) {
    setIdCategory(e.target.value);
  }

  return (
    <main>
      <div className="container-content">
        <div className="infos">
          <h1 className="post-title">{ isNew === true ? 'Criar um Novo Post' : 'Post' }</h1>
          <form action="" onSubmit={handleNewPost}>
            <div className="content-infos">
              <label htmlFor="title" className="labels">Título</label>
              <div className="name-block">
                <input 
                  name="title" 
                  id="title"
                  type="text"
                  className="inputs" 
                  value={title}
                  required
                  readOnly={!isNew && type === 'r'}
                  placeholder="Título do Post" 
                  onChange={e => setTitle(e.target.value)}
                />

                <select 
                  name="category" 
                  id="category"
                  onChange={handleSelectedCategory}
                  defaultValue={isNew === true ? "0" : "1"}
                  required={isNew}
                  readOnly={!isNew && type === 'r'}
                  className="select"
                >              
                  <option disabled value="0">Selecione uma Categoria</option>
                  { isNew === false 
                    ? 
                      <option disabled value="1">{category}</option>
                    : 
                      categories.map( category => (
                        <option
                          value={category.id}
                          key={category.id}
                        >
                          {category.description}
                        </option>
                      ))
                  }

                </select>

              </div>

              <label htmlFor="title" className="labels">Descrição</label>
              <input 
                name="description" 
                id="description"
                type="text"
                className="inputs" 
                value={description}
                readOnly={!isNew && type === 'r'}
                required
                placeholder="Descrição do Post" 
                onChange={e => setDescription(e.target.value)}
              />

              <label htmlFor="title" className="labels">Conteúdo</label>
              <textarea 
                name="content" 
                id="content"
                placeholder="Conteúdo" 
                className="textarea"
                value={content}
                readOnly={!isNew && type === 'r'}
                required
                onChange={e => setContent(e.target.value)}
              />

              <div className="button-class">
                <button type="submit" className="button">
                  { isNew === true ? 'Criar' : 'Voltar' }
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Post;