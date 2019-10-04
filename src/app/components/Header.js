import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <header>
    <h1>React universal/isomorphic app</h1>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  </header>
);
