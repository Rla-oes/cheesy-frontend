import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../component/Header";
import "./category.css";

function Category() {
    const navigate = useNavigate();
    const categories = [
        "한식",
        "중식",
        "양식",
        "일식",
        "분식",
        "디저트",
        "아시안",
        "패스트푸드",
    ];

    const handleCategoryClick = (category) => {
        navigate("/roulette", { state: { category } }); // 🔹 state로 카테고리 정보 전달
    };

    return (
        <div className="container">
            <Header title="카테고리" />
            <div className="button-container">
                {categories.map((category, index) => (
                    <button 
                        key={index} 
                        className="button"
                        onClick={() => handleCategoryClick(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Category;
