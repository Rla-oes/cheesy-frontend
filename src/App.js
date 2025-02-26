import React from "react";
import { Routes, Route } from "react-router-dom";
import Category from "./pages/Category";
import CategoryDetail from "./pages/CategoryDetail"; // 새로운 상세 페이지 추가

function App() {
  return (
    <Routes>
      <Route path="/" element={<Category />} />
      <Route path="/category/:categoryName" element={<CategoryDetail />} />
    </Routes>
  );
}

export default App;
