import React from 'react';
import { Link } from 'react-router-dom';
import { FiEdit3, FiTrash } from 'react-icons/fi';

import api from '../../services/api';

import getToken from '../../components/getToken';

import './style.css';

function ListPostsDashboard ({ post }) {
  const AuthStr = getToken();
  
  async function handleDeletePost() {
    if(window.confirm('Deseja Excluir Esse Item?')) {
      try {
        await api.delete(`/post/${post.id}`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': AuthStr
          }
        });
  
        // alert('Post Excluido com sucesso');
      }
      catch (err) {
        console.log(err);
      }
    }
  }

  return (
    <li className="post-dashboard">
        <div className="content-list-post">
          <div className="infos-list-post">
            <span className="dashboard-title">{post.title}</span>
            <span className="dashboard-date">{post.date}</span>
            <p className="post-list-description">{post.content}</p>
          </div>

          <div className="actions-list-post">
            <div className="edit">
              <Link to={{pathname: `/post/e/${post.id}`}} className="edit-link">
                <FiEdit3 className="edit" size={22} />
              </Link>
            </div>
            <div className="delete">
              <FiTrash className="delete" size={22} onClick={handleDeletePost}/>
            </div>
          </div>
        </div>
    </li>
  );
}

export default ListPostsDashboard;