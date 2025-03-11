import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ 추가
import "./Header.css";

function HeaderResultPage({ title }) {
  const navigate = useNavigate(); // ✅ 네비게이션 기능 사용

  return (
    <div className="header">
      {/* 홈으로 가기 버튼 */}
      <button className="icon-button" onClick={() => navigate("/Home")}>
        <img src="/images/iconamoon_home.svg" alt="홈으로 가기" />
      </button>

      <span className="header-title">{title}</span>

      {/* 마이메뉴 버튼 */}
      <button className="icon-button" onClick={() => navigate("/MyMenu")}>
        <img src="/images/material-symbols_menu-book.svg" alt="뒤로 가기" />
      </button>
    </div>
  );
}

export default HeaderResultPage;
