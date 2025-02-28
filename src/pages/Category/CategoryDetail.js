import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../../component/Header";
import "./CategoryDetail.css";

function CategoryDetail() {
  const { categoryName } = useParams(); // URL에서 카테고리 이름 가져오기
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/menus`, { params: { category_name: categoryName } })
      .then((response) => setMenus(response.data))
      .catch((error) => console.error("메뉴 조회 오류:", error));
  }, [categoryName]);

  return (
    <div className="container">
      <Header title={`${categoryName} 메뉴`} />
      <div className="menu-container">
        {menus.length > 0 ? (
          menus.map((menu) => (
            <div key={menu.id} className="menu-item">
              <span>{menu.name}</span>
            </div>
          ))
        ) : (
          <p>해당 카테고리의 메뉴가 없습니다.</p>
        )}
      </div>
    </div>
  );
}

export default CategoryDetail;
