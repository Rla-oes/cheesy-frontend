import React from "react";
import "./Header.css";

function Header({ title }) {
  return (
    <div className="header">
      <button className="icon-button">
        <img src="/images/back-button.png" alt="뒤로 가기" />
      </button>
      <span className="header-title">{title}</span>
      <button className="icon-button">
        <img src="/images/home-button.png" alt="홈으로 가기" />
      </button>
    </div>
  );
}

export default Header;