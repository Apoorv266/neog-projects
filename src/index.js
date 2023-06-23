import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import TableContextWrapper from './Context/TableContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <TableContextWrapper>
    <App />
    </TableContextWrapper>
    </BrowserRouter>
  </React.StrictMode>
);

