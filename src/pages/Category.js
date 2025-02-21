import React, { useState } from 'react';
import Header from '../component/Header'; // 공통 헤더 가져오기
import './category.css';

function Category() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // 고정된 카테고리 목록
  const foodCategories = [
    '한식', '중식', '양식', '일식',
    '분식', '디저트', '아시안', '패스트푸드'
  ];

  return (
    <div className="container">
      <Header title="카테고리" /> {/* 공통 헤더 사용 */}

      <div className="button-container">
        {foodCategories.map((category, index) => (
          <button
            key={index}
            className="button"
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Category;

