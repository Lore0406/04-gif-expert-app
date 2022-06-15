import React from 'react';
import ReactDOM from 'react-dom/client';

// no sé qué es, supongo algo nuevo, ni idea si se usa
import reportWebVitals from './reportWebVitals';

//importamos la app 
import GifExpertApp from './GifExpertApp';
// importamos el css
import './index.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GifExpertApp />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
