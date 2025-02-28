import React from "react";
import { Routes, Route } from "react-router-dom"; // ✅ `Router` 삭제
import Home from "./pages/Home";
import Category from "./pages/Category";
import CategoryDetail from "./pages/CategoryDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category" element={<Category />} />
      <Route path="/category/:categoryName" element={<CategoryDetail />} />
    </Routes>
  );
}

export default App;

