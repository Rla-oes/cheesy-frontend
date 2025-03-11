import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Home.css";
import Header from "../../component/Header";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const existingId = localStorage.getItem("anonymous_id");

    // 익명 사용자 ID가 없을 때만 요청
    if (!existingId) {
      axios
        .get(`${BASE_URL}/api/generate-anonymous-id`, { withCredentials: true })
        .then((response) => {
          const anonymousId = response.data.anonymous_id;
          if (anonymousId) {
            localStorage.setItem("anonymous_id", anonymousId);
            console.log("새 익명 ID 저장:", anonymousId);
          }
        })
        .catch((error) => console.error("ID 생성 실패:", error));
    } else {
      console.log("이미 존재하는 익명 ID:", existingId);
    }

    // 메뉴 import: localStorage에 플래그 없을 때만 실행
    const isMenuImported = localStorage.getItem("menu_imported");

    if (!isMenuImported) {
      axios
        .post(`${BASE_URL}/api/menus/import`)
        .then((res) => {
          console.log("CSV import 성공:", res.data);
          localStorage.setItem("menu_imported", "true"); // 플래그 저장
        })
        .catch((err) => {
          console.error("CSV import 실패:", err);
        });
    } else {
      console.log("메뉴는 이미 import됨 (재요청 생략)");
    }
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
