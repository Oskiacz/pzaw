import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import Form from './Form';
import Table from './Table';
import Grid from './Grid';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Form />
    <Table />
    <Grid />
  </React.StrictMode>
);