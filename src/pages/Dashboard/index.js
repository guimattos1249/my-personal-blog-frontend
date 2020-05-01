import React from 'react';
import { useHistory } from 'react-router-dom';
function Dashboard () {
  const name = localStorage.getItem('first_name');

  const history = useHistory();

  function handleLogout () {
    localStorage.clear();

    history.push('/');
  }

  return (
    <div>
      <h1>Bem vindo {name}</h1>
      <button onClick={handleLogout}>Sair</button>
    </div>
  );
}

export default Dashboard;