import React, { useState, useEffect } from 'react';

import Navbar from '../../components/navbar';

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
        alert('Não foi possível Cadastar o Post.');
        console.log(err);
      }
    }

    handleCategory();
  // eslint-disable-next-line
  }, []);

  async function handleNewPost (e){
    e.preventDefault();

    try {
      const response = await api.post('/post', {
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

      alert(`Categoria ${description} incluída com sucesso`);
      console.log(response);
    }
    catch (err) {
      alert('Não foi possível Cadastrar a Categoria.');
      console.log(err);
    }
  }

  return (
    <div>
      <Navbar />
      {/* TODO -> Style page NewPost */}
      <div className="container-content">
        <div className="infos">
          <h1>New Post</h1>
          <form action="" onSubmit={handleNewPost}>
            <div className="content-infos">
              <input 
                type="text"
                className="inputs" 
                value={title}
                required
                placeholder="Título do Post" 
                onChange={e => setTitle(e.target.value)}
              />

              <input 
                type="text"
                className="inputs" 
                value={description}
                required
                placeholder="Descrição do Post" 
                onChange={e => setDescription(e.target.value)}
              />

              <textarea 
                placeholder="Conteúdo" 
                value={content}
                required
                onChange={e => setContent(e.target.value)}
              />

              <select 
                name="category" 
                id="category"
                onChange={e => setIdCategory(e.target.value)}
                defaultValue="0"
                required
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

              <button type="submit">Criar</button>
            </div>
            

          </form>
        </div>
      </div>
    </div>
  );
}

export default NewPost;