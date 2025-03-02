import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Header from "../../component/Header";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="screen">
      <Header title="Home" />
      <div className="div">

        <div className="home-container">
          <div className="category-wrapper">
            <button className="category-go-button" onClick={() => navigate("/category")}>
              음식 카테고리 <br />
              선택하기
            </button>
          </div>

          <div className="mymenu-wrapper">
            <button className="mymenu-go-button" onClick={() => navigate("/Mymenu")}>
              My Menu
              <br />
              바로가기
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}




export default Home;
