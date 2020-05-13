import React from 'react';

import './style.css';

function ListPostsDashboard ({ post }) {
  return (
    <li className="post-dashboard">
        <span className="dashboard-title">{post.title}</span>
        <span className="dashboard-date">{post.date}</span>
        <p>{post.description}</p>
    </li>
  );
}

export default ListPostsDashboard;