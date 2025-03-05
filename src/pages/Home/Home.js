import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Home.css";
import Header from "../../component/Header";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("/api/generate-anonymous-id")
      .then((response) => {
        console.log("응답 데이터:", response.data);
        const anonymousId = response.data.anonymous_id;

        if (anonymousId) {
          localStorage.setItem("anonymous_id", anonymousId);
          console.log("익명 아이디 저장:", anonymousId);
        } else {
          console.error(
            "ID 생성에 실패했습니다. 응답 데이터가 올바르지 않습니다."
          );
        }
      })
      .catch((error) => console.error("ID 생성 실패:", error));
  }, []);

  return (
    <div className="screen">
      <Header title="Home" />
      <div className="div">
        <div className="home-container">
          <div className="category-wrapper">
            <button
              className="category-go-button"
              onClick={() => navigate("/category")}
            >
              음식 카테고리 <br />
              선택하기
            </button>
          </div>

          <div className="mymenu-wrapper">
            <button
              className="mymenu-go-button"
              onClick={() => navigate("/Mymenu")}
            >
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
