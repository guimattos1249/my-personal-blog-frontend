import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

function Register () {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  async function handleRegister (e) {
    e.preventDefault();

    console.log(first_name);

    try {
      const response = await api.post('user', {
        first_name,
        last_name,
        email,
        password
      });
      
      //TODO -> Refactor to use response.data
      localStorage.setItem('first_name', first_name);
      localStorage.setItem('email', email);
      localStorage.setItem('token', response.data.token);

      history.push('/dashboard');
    }
    catch (err) {
      console.log('Não foi possível Realizar o cadastro, tente novamente!');
    }


  }

  return (
    <div>
      <div className="card">
        <h1>Cadastre-se</h1>
        <form onSubmit={handleRegister}>
          <div className="content">
            <label htmlFor="first_name">
              Nome
            </label>
            <input 
              className="inputs"
              type="text" 
              name="first_name" 
              id="first_name" 
              placeholder="Digite seu Nome"
              onChange={e => setFirstName(e.target.value)}
            />

            <label htmlFor="last_name">
              Sobrenome
            </label>
            <input 
              className="inputs"
              type="text" 
              name="last_name" 
              id="last_name" 
              placeholder="Digite seu Sobrenome"
              onChange={e => setLastName(e.target.value)}
            />

            <label htmlFor="email">
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

            <label htmlFor="password">
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
              Cadastrar
            </button>

            <Link to='/'>
              <p>Voltar para menu inicial!</p>
            </Link>
          </div>
        </form>
        
      </div>
      
      
    </div>
  );
}

export default Register;