import React, { useState } from 'react';

import Navbar from '../../components/navbar';

import getToken from '../../components/getToken';

import api from '../../services/api';

import './style.css';

function NewCategory () {
  const [description, setDescription] = useState('');
  const AuthStr = getToken();


  async function handleCategory (e) {
    e.preventDefault();

    try {
      const response = await api.post('/category', {
          description 
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
    <div id="app">
      <Navbar />
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
    </div>
  );
}

export default NewCategory;