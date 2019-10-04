import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

export default () => (
  <div className="page404">
    <Helmet>
      <title>404 Page not found - React Universal App</title>
    </Helmet>
    <h1>Ops!</h1>
    <p>This page does not exists</p>
    <Link to="/">back to Home</Link>
  </div>
);
