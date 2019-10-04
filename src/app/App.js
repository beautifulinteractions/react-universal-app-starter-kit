import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Header from './components/Header';
import Home from './views/Home';
import About from './views/About';
import Nested from './views/Nested';
import NoMatch from './views/404';

// styles
import './styles/general.scss';

export default () => (
  <div className="app">
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/about/nested" exact component={Nested} />
      <Route component={NoMatch} />
    </Switch>
  </div>
);
