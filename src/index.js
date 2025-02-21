import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Category from './pages/Category';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); // createRoot 사용
root.render(
  <React.StrictMode>
    <Category />  
  </React.StrictMode>
);

// 성능 측정 함수
reportWebVitals();
