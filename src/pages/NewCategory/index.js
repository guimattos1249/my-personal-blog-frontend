import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

import getToken from '../../components/getToken';

import api from '../../services/api';

import './style.css';

function NewCategory () {
  const [description, setDescription] = useState('');
  const AuthStr = getToken();

  const history = useHistory();

  async function handleCategory (e) {
    e.preventDefault();

    try {
      await api.post('/category', {
          description 
        },
        {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': AuthStr
        }
      });

      alert(`Categoria ${description} incluída com sucesso`);
      history.push('/home');
    }
    catch (err) {
      alert('Não foi possível Cadastrar a Categoria.');
      console.log(err);
    }
  }

  return (
    <main>
      <div className="container-content">
        <div className="infos-category">
          <h1 className="category-title">Nova Categoria</h1>
          <form action="" onSubmit={handleCategory}>
            <div className="content-category-infos">
              <label htmlFor="description" className="labels">Categoria</label>
              <input 
                type="text" 
                placeholder="Digite a Categoria"
                value={description}
                required
                name="description" 
                id="description" 
                className="inputs"
                onChange={e => setDescription(e.target.value)}
              />

              <div className="button-class">
                <button type="submit" className="button">Cadastrar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default NewCategory;