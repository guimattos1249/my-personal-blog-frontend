import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import NewPost from './pages/NewPost';
import NewCategory from './pages/NewCategory';
import Post from './pages/Post';
import NavRoute from './components/NavRoute';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" component={Register} />
        <NavRoute path="/dashboard" component={Dashboard} />
        <NavRoute path="/newpost" component={NewPost} />
        <NavRoute path="/newcategory" component={NewCategory} />
        <NavRoute path="/post/:id" component={Post} />
      </Switch>
    </BrowserRouter>
  );
  
}