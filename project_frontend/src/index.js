import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App/App';
import Form from './Form/Form';
import Table from './Table/Table';
import Grid from './Grid/Grid';
import AxiosExample from './AxiosExample/AxiosExample';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <AxiosExample />
    <Form />

    <Grid />
  </React.StrictMode>
);
