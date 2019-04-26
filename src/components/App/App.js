import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Home from 'pages/Home';
import RegionalPage from 'pages/RegionalPage';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path='/region/:city'
          component={RegionalPage}
        />
        <Route
          path='/'
          component={Home}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
