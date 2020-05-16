import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import getToken from '../../components/getToken';

import './style.css';

function Post ({post}) {
  const [category_description, setCategoryDescription] = useState('');

  const AuthStr = getToken();

  useEffect(() => {
    async function getCategory() {
      const response = await api.get(`/category/${post.id_category}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': AuthStr
        }
      });

      setCategoryDescription(response.data.description);
    }

    getCategory();
    // eslint-disable-next-line
  }, [AuthStr])

  return (
    <li>
      <div className="post-item">  
        <header>
          <div className="title-post">
            <div className="category-description">
              <p id="category-description">{category_description}</p>
            </div>
            <strong id="post-title">{post.title}</strong>
            <hr/>
            <p id="date">{post.date}</p>
          </div>
        </header>
        <p>{post.description}</p>
        <div className="post-content">
          <p>{post.content}</p>
        </div>
        <div className="post-footer">
          <Link to={{pathname: `/post/r/${post.id}`}} className="post-link">Ver mais</Link>
        </div>
      </div>
    </li>
  );
}

export default Post;