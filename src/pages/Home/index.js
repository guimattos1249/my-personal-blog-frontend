import React, { useState, useEffect } from 'react';

import Post from '../../components/postItem';

import api from '../../services/api';

import getToken from '../../components/getToken';

import './style.css';

function Home () {
  const [posts, setPosts] = useState([]);

  const name = localStorage.getItem('first_name');

  const AuthStr = getToken();

  useEffect(() => {
    async function loadPosts() {
      const response = await api.get('/posts', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': AuthStr
        }
      });

      setPosts(response.data);
    }

    loadPosts();
    // eslint-disable-next-line
  }, [AuthStr]);
  
  return (
    <main>
      <div className="container-home">
        <div className="welcome">
          <span className="welcome-text">Olá {name}, </span> 
          <span className="welcome-text">Bem vindo ao </span>
          <span className="title">
            my-personal-blog
          </span>
        </div>

        <ul className="list-post-home">
          {posts.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </ul>
      </div>
    </main>
  );
}

export default Home;