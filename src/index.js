import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/normalize.css';
import './assets/css/roboto-font.css';
import './assets/css/variables.css';
import './assets/css/style.css';
import App from './App';
import { AppProvider } from './assets/context/appContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);