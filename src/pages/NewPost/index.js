import React, { useState, useEffect } from 'react';

import { useHistory } from 'react-router-dom';

import getToken from '../../components/getToken';

import api from '../../services/api';

import './style.css';

function NewPost () {
  const [title, setTitle] = useState(''); 
  const [date] = useState(new Date().toLocaleDateString());
  const [description, setDescription] = useState(''); 
  const [content, setContent] = useState('');
  const [id_category, setIdCategory] = useState();
  const [categories, setCategories] = useState([]);

  const AuthStr = getToken();

  const history = useHistory();

  useEffect(() => {
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
  // eslint-disable-next-line
  }, []);

  async function handleNewPost (e){
    e.preventDefault();

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
      history.push('/dashboard');
    }
    catch (err) {
      alert('Não foi possível Cadastrar o Post.');
      console.log(err);
    }
  }

  return (
    <main>
      <div className="container-content">
        <div className="infos">
          <h1 className="post-title">Criar um Novo Post</h1>
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
                  placeholder="Título do Post" 
                  onChange={e => setTitle(e.target.value)}
                />

                <select 
                  name="category" 
                  id="category"
                  onChange={e => setIdCategory(e.target.value)}
                  defaultValue="0"
                  required
                  className="select"
                >              
                  <option disabled value="0">Selecione uma Categoria</option>
                  {categories.map( category => (
                    <option
                      value={category.id}
                      key={category.id}
                    >
                      {category.description}
                    </option>
                  ))}

                </select>

              </div>

              <label htmlFor="title" className="labels">Descrição</label>
              <input 
                name="description" 
                id="description"
                type="text"
                className="inputs" 
                value={description}
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
                required
                onChange={e => setContent(e.target.value)}
              />

              <div className="button-class">
                <button type="submit" className="button">Criar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default NewPost;