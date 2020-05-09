import React from 'react';

import NavBar from '../../components/navbar';

import './style.css';

function Dashboard () {
  const name = localStorage.getItem('first_name');
  
  return (
    <div id="app">      
      <NavBar />
      <main>
        <div className="container-dashboard">
          <div className="welcome">
            <span className="welcome-text">Olá {name}, </span> 
            <span className="welcome-text">Bem vindo ao </span>
            <span className="title">
              my-personal-blog
            </span>
        </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;