import React, { useState } from 'react';

import Navbar from '../../components/navbar';

import getToken from '../../components/getToken';

import api from '../../services/api';


function NewCategory () {
  const [description, setDescription] = useState('');
  const AuthStr = getToken();


  async function handleCategory (e) {
    e.preventDefault();

    try {
      const response = await api.post('/categories', {
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
    // TODO -> Style this page
    <div>
      <Navbar />
      <div className="container">
        <form action="" onSubmit={handleCategory}>
          <input 
            type="text" 
            placeholder="Digite a Categoria"
            value={description}
            required
            name="description" 
            id="description" 
            onChange={e => setDescription(e.target.value)}
          />
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}

export default NewCategory;