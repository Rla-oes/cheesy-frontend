import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="screen">
      <div className="main-container">
        {/* 중앙 이미지 */}
        <div className="image-container">
          <img src="/images/home-image.png" alt="홈 이미지" />
        </div>

        {/* 시작 버튼 */}
        <button className="start-button" onClick={() => navigate("/category")}>
          시작하기
        </button>
      </div>
    </div>
  );
}

export default Home;
