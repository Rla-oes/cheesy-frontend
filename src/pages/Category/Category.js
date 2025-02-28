import React from "react";
import { Link } from "react-router-dom";
import Header from "../../component/Header";
import "./category.css";

function Category() {
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

  return (
    <div className="container">
      <Header title="카테고리" />

      {/* 카테고리 버튼 → 클릭 시 해당 카테고리 페이지로 이동 */}
      <div className="button-container">
        {categories.map((category, index) => (
          <Link to={`/category/${category}`} key={index} className="button">
            {category}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Category;