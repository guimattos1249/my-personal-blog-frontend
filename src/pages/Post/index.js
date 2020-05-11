import React, { useState, useEffect } from 'react';

import { Link, useParams } from 'react-router-dom';

import getToken from '../../components/getToken';

import api from '../../services/api';

import './style.css';

function Post () {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState(''); 
  const [content, setContent] = useState('');
  // const [id_category, setIdCategory] = useState(0);
  const [category, setCategory] = useState('');
  const { id } = useParams();

  const AuthStr = getToken();

  useEffect(() => {
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

        handleCategory(response.data.id_category);
      }
      catch (err) {
        alert('Não foi possível Buscar o Post.');
        console.log(err);
      }
    }

    async function handleCategory (pId) {
      try {
        console.log(pId);
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

  // eslint-disable-next-line
  }, []);



  return (
    <main>
      <div className="container-content">
        <div className="infos">
          <h1 className="post-title">Post</h1>
          <form>
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
                  readOnly={true}
                  placeholder="Título do Post" 
                />

                <select 
                  name="category" 
                  id="category"
                  defaultValue="0"
                  readOnly={true}
                  required
                  className="select"
                >              
                  <option disabled value="0">{category}</option>
                </select>

              </div>

              <label htmlFor="title" className="labels">Descrição</label>
              <input 
                name="description" 
                id="description"
                type="text"
                className="inputs" 
                value={description}
                readOnly={true}
                required
                placeholder="Descrição do Post" 
              />

              <label htmlFor="title" className="labels">Conteúdo</label>
              <textarea 
                name="content" 
                id="content"
                placeholder="Conteúdo" 
                className="textarea"
                value={content}
                readOnly={true}
              />

              <div className="button-class">
                <Link to="/dashboard"className="button">Voltar</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Post;