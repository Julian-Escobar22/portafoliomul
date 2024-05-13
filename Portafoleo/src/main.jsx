import React from 'react';
import { createRoot } from 'react-dom/client'; // Cambia la importación aquí
import App from './app/App.jsx';
import './assets/styles/index.css';
import { BrowserRouter } from 'react-router-dom';
import './i18n.js';

const root = createRoot(document.getElementById('root')); // Usa createRoot aquí

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
