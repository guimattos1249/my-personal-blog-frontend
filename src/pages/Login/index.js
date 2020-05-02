import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './style.css';

import api from '../../services/api';

function Login () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  async function handleSubmit (e) {
    e.preventDefault();

    try {
      const response = await api.post('/singin', {
        email,
        password
      });
  
      localStorage.setItem('email', response.data.email);
      localStorage.setItem('first_name', response.data.first_name);
      localStorage.setItem('token', response.data.token);
      
      history.push('/dashboard');
    }
    catch (err) {
      alert('Não foi possível Realizar o login. Verifique seu usuário e senha e tente novamente!');
      console.log(err);
    }
  }

  return (
    <div className="container">
      <div className="card">
        <div className="box"></div>
        <h1 className="login-title">my-personal-blog</h1>
        <form onSubmit={handleSubmit}>
          <div className="content">
            <label htmlFor="email" className="labels">
              Email
            </label>
            <input 
              className="inputs"
              type="text" 
              name="email" 
              id="email" 
              placeholder="Digite seu Email"
              onChange={e => setEmail(e.target.value)}
            />

            <label htmlFor="password" className="labels">
              Senha
            </label>
            <input
              className="inputs" 
              type="password" 
              name="password" 
              id="password" 
              placeholder="Digite sua Senha"
              onChange={e => setPassword(e.target.value)}
            />

            <button type="submit" className="button">
              Fazer Login
            </button>
            <Link to='/register' className="links login">
              <p>Não tem Cadastro? Cadastre-se</p>
            </Link>
          </div>
        </form>

        
      </div>
      
    </div>
  );
}

export default Login;