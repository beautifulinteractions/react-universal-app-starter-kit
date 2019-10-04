import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

const Index = () => (
  <Router>
    <App />
  </Router>
);

ReactDom.render(<Index />, document.getElementById('root'));
