import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Post from './pages/Post';
import Dashboard from './pages/Dashboard';
import NewCategory from './pages/NewCategory';
import NavRoute from './components/NavRoute';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" component={Register} />
        <NavRoute path="/home" component={Home} />
        <NavRoute path="/dashboard" component={Dashboard} />
        <NavRoute path="/newpost" component={() => <Post isNew={true} />} />
        <NavRoute path="/newcategory" component={NewCategory} />
        <NavRoute path="/post/:id" component={() => <Post isNew={false} />} />
      </Switch>
    </BrowserRouter>
  );
}