import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

export default () => (
  <div>
    <Helmet>
      <title>A Nested page - React Universal App</title>
    </Helmet>
    <h1>Nested page</h1>
    <Link to="/the-place-where-you-go-where-nobody-knows">take me to a 404 page</Link>
  </div>
);
