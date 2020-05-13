import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import ListPostsDashboard from '../../components/listPostsDashboard';

import getToken from '../../components/getToken';

import './style.css';

function Dashboard () {
  const [posts, setPosts] = useState([]);

  const AuthStr = getToken();

  useEffect(() => {
    async function getPostsDashboard() {
      try {
        const response = await api.get('/posts', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': AuthStr
          }
        });

        setPosts(response.data);
      } 
      catch (err) {
        console.log(err);
      }
    }
    
    getPostsDashboard();
  }, [AuthStr]);

  return (
    <main>
      <div>
        <h1>Dashboard</h1>

        <ul className="list-post-dashboard">
          {posts.map(post => (
            <ListPostsDashboard post={post} key={post.id} />
          ))}
        </ul>
      </div>
    </main>
  );
}

export default Dashboard;