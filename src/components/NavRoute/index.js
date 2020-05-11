import React from 'react';
import { Route } from 'react-router-dom';

import Navbar from '../navbar';

function NavRoute ({exact, path, component: Component}) {
  return (
    <Route exact={exact} path={path} render={(props) => (
      <div id="app">
        <Navbar />
        <Component {...props}/>
      </div>
    )}/>
  ); 
}

export default NavRoute;