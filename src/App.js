import React from "react";
import { Routes, Route } from "react-router-dom";
import Category from "./pages/Category/Category";
import CategoryDetail from "./pages/Category/CategoryDetail";
import Mymenu from "./pages/Mymenu/Mymenu";  // Mymenu 페이지 import

import Home from "./pages/Home";

import Roulette from "./pages/Roulette/roulette";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Roulette" element={<Roulette />} />
            <Route path="/category" element={<Category />} />
            <Route path="/category/:categoryName" element={<CategoryDetail />} />
            <Route path="/Mymenu" element={<Mymenu />} />  {/* /Mymenu 경로 추가 */}
        </Routes>
    );
}

export default App;
