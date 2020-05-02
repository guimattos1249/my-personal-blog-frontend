import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import './style.css';

function Navbar () {
  const history = useHistory();

  function handleLogout () {
    localStorage.clear();

    history.push('/');
  }

  return (
    <nav className="navbar">
      <Link to='/dashboard' className="nav-link logo">
        my-personal-blog
      </Link>
      <p className="pipe">|</p>
      <Link to='/' className="nav-link">
        Novo Post
      </Link>
      <Link to='/dashboard' className="nav-link">
        Nova Categoria
      </Link>
      <div className="right-group">
        {/* TODO -> Fix hover on this two links */}
        <Link to='/dashboard' className="nav-link">
          Sobre
        </Link>
        <Link className="nav-link" onClick={handleLogout}>
          Sair
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;