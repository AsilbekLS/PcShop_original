import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Bu fayl stilni o'rnata oladi, o'zgartirish mumkin
import App from './App'; // App komponentini import qilamiz

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

