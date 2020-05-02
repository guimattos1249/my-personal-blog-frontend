import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

function Navbar () {
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
      <div className="about">
        <Link to='/dashboard' className="nav-link about">
          Sobre
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;