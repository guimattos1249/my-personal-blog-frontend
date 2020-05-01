import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';


function Login () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit (e) {
    e.preventDefault();

    console.log(email);
    console.log(password);

    try {
      const response = await api.post('/singin', {
        email,
        password
      });
  
      console.log(response.data.email);
      console.log(response.data.password);
      console.log(response.data.token);      
    }
    catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <h1>Faça seu Login</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email
        </label>
        <input 
          type="text" 
          name="email" 
          id="email" 
          placeholder="Digite seu Email"
          onChange={e => setEmail(e.target.value)}
        />

        <label htmlFor="password">
          Senha
        </label>
        <input 
          type="password" 
          name="password" 
          id="password" 
          placeholder="Digite sua Senha"
          onChange={e => setPassword(e.target.value)}
        />

        <button type="submit">
          Fazer Login
        </button>
      </form>
      <Link to='/register'>
        <p>registrar!</p>
      </Link>
    </>
  );
}

export default Login;