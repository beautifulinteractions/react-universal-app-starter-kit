import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

export default () => (
  <div className="home">
    <Helmet>
      <title>Home - React Universal App</title>
    </Helmet>
    <h1>Welcome to Home!</h1>
    <Link to="/about">go to About page</Link>
  </div>
);
