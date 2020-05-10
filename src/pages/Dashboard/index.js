import React, { useState, useEffect } from 'react';

import NavBar from '../../components/navbar';
import Post from '../../components/post';

import api from '../../services/api';

import getToken from '../../components/getToken';

import './style.css';

function Dashboard () {
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

      console.log(posts);
      console.log('here');
    }

    loadPosts();
    // eslint-disable-next-line
  }, [AuthStr]);
  
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

        <ul>
          {posts.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </ul>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;