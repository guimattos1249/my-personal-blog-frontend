import React from 'react';

import NavBar from '../../components/navbar';

import './style.css';

function Dashboard () {
  const name = localStorage.getItem('first_name');

  return (
    <div>
      <NavBar />
      <h1>Bem vindo {name}</h1>
    </div>
  );
}

export default Dashboard;