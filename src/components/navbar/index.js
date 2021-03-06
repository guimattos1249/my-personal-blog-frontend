import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiBookmark, FiClipboard, FiFilePlus, FiHome, FiLogOut, FiInfo } from 'react-icons/fi';

import './style.css';

function Navbar () {
  const history = useHistory();

  function handleLogout () {
    localStorage.clear();

    history.push('/');
  }

  return (
    <aside>
      <div id="nav">
        <div className="logo">
          <span className="logo-nav">
            my-personal-blog
          </span>
        </div>
        <div className="link-container">
          <FiHome  size={22} color ="#0375B4"/>
          <Link to='/home' className="link">
            Home
          </Link>
        </div>

        <div className="link-container">
          <FiClipboard size ={20} color="#0375B4" />
          <Link to='/dashboard' className="link">
            Dashboard
          </Link>
        </div>

        <div className="link-container">
          <FiFilePlus size ={20} color="#0375B4" />
          <Link to='/newpost' className="link">
            Novo Post
          </Link>
        </div>

        <div className="link-container">
          <FiBookmark  size={20} color ="#0375B4"/>
          <Link to='/newcategory' className="link">
            Nova Categoria
          </Link>
        </div>
        
        <div className="link-container">
          <FiInfo size={20} color ="#0375B4" />
          <Link to='/home' className="link">
            Sobre
          </Link>
        </div>

        <div className="link-container out">
          <FiLogOut size={20} color ="#0375B4" />
          <Link to='/'  onClick={handleLogout} className="link">
            Sair
          </Link>
        </div>

        <hr className="separator"/>

        <div className="greetings">
          <p>O my-personal-blog, é um sistema de criação de posts, para você se 
            organizar com suas anotaçoes.
            <a href='https://github.com/guimattos1249' className="link" target="blank">
              Me encontre no github
            </a>
          </p>

        </div>        
      </div>
    </aside>
    
  );
}

export default Navbar;