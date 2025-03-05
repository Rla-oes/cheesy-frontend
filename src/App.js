import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Category from "./pages/Category/Category";
import CategoryDetail from "./pages/Category/CategoryDetail";
import Mymenu from "./pages/Mymenu/Mymenu";
import Result from "./pages/Result/Result";
import Home from "./pages/Home/Home";
import Roulette from "./pages/Roulette/Roulette";
import Start from "./pages/Start/Start"; // Start 컴포넌트 임포트

function App() {
    const navigate = useNavigate(); // 경로 이동을 위한 훅

    // // start -> home화면 전환
    // useEffect(() => {
    //     // 컴포넌트가 처음 렌더링될 때 2초 후 Home 화면으로 전환
    //     const timer = setTimeout(() => {
    //         navigate("/home"); // 2초 뒤에 /home 경로로 이동
    //     }, 2000);
    //
    //     return () => clearTimeout(timer); // 컴포넌트가 언마운트될 때 타이머 정리
    // }, [navigate]);

    return (
        <Routes>
            <Route path="/" element={<Start />} /> {/* Start 컴포넌트를 기본 경로로 설정 */}
            <Route path="/home" element={<Home />} /> {/* 2초 후 /home으로 전환 */}
            <Route path="/Roulette" element={<Roulette />} />
            <Route path="/category" element={<Category />} />
            <Route path="/category/:categoryName" element={<CategoryDetail />} />
            <Route path="/Mymenu" element={<Mymenu />} />
            <Route path="/Result" element={<Result />} />
        </Routes>
    );
}

export default App;
