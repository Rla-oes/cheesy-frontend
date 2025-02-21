import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // 추가
import "./index.css";
import App from "./App"; // App.js에서 라우팅을 관리
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />  {/* 이제 App.js에서 라우팅 관리 */}
    </BrowserRouter>
  </React.StrictMode>
);

// 성능 측정 함수
reportWebVitals();
