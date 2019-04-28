import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top'
import Home from 'pages/Home';
import Regional from 'pages/Regional';
import NotFound from 'pages/404';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Switch>
          <Route
            path='/'
            exact
            component={Home}
          />
          <Route
            path='/region/:city'
            component={Regional}
          />
          <Route
            component={NotFound}
          />
        </Switch>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
