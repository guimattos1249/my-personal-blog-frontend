import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiBookmark, FiFilePlus, FiHome, FiLogOut, FiInfo } from 'react-icons/fi';

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
          <Link to='/dashboard' className="link">
            Home
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
          <Link to='/dashboard' className="link">
            Sobre
          </Link>
        </div>

        <div className="link-container">
          <FiLogOut size={20} color ="#0375B4" />
          <Link to='/'  onClick={handleLogout} className="link">
            Sair
          </Link>
        </div>
      </div>
    </aside>
    
  );
}

export default Navbar;