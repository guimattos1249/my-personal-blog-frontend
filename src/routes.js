import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import NewPost from './pages/NewPost';
import NewCategory from './pages/NewCategory';
import Post from './pages/Post';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/newpost" component={NewPost} />
        <Route path="/newcategory" component={NewCategory} />
        <Route path="/post/:id" component={Post} />
      </Switch>
    </BrowserRouter>
  );
  
}