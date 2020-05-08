import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import woman from '../../assets/woman.jpg';

import './style.css';

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
      alert('Não foi possível Realizar o cadastro, tente novamente!');
      console.log(err);
    }
  }

  return (
    <div className="container">
      <div className="card-container">
        <div className="register-container">
          
          <h2 className="register-title">Faça Seu Cadastro</h2>
          <div className="infos-register">
            <form onSubmit={handleRegister}>
              <label htmlFor="first_name" className="labels">
                Nome
              </label>
              <div className="name-block">
                <input 
                  className="inputs block"
                  type="text"
                  value={first_name} 
                  name="first_name" 
                  id="first_name" 
                  placeholder="Nome"
                  onChange={e => setFirstName(e.target.value)}
                />
                <input 
                  className="inputs block"
                  type="text"
                  value={last_name}
                  name="last_name" 
                  id="last_name" 
                  placeholder="Sobrenome"
                  onChange={e => setLastName(e.target.value)}
                />
              </div>
            
              <label htmlFor="email" className="labels">
                Email
              </label>
              <input 
                className="inputs"
                type="text"
                value={email}
                required
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
                value={password}
                required
                name="password" 
                id="password" 
                placeholder="Digite sua Senha"
                onChange={e => setPassword(e.target.value)}
              />

              <div className="button-class">
                <button type="submit" className="button-register">
                  Cadastrar
                </button>

                <Link to='/' className="singin-link">
                  <span>Sing In</span>
                </Link>
              </div>
            </form>
          </div>
        </div>

        <div className="img-container">
          <img src={woman} alt="" className="img"/>
        </div>
      </div>
    </div>
  );
}

export default Register;