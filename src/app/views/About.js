import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

export default () => (
  <div className="about-page">
    <Helmet>
      <title>About Page - React Universal App</title>
    </Helmet>
    <h1>About Page</h1>
    <p>Lorem ipsum dolor sit amet...</p>
    <Link to="/about/nested">nested page</Link>
  </div>
);
