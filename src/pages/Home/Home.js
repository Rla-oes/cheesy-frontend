import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Home.css";
import Header from "../../component/Header";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    // 익명 사용자 ID 생성
    axios
      .get(`${BASE_URL}/api/generate-anonymous-id`, { withCredentials: true })
      .then((response) => {
        console.log("응답 데이터:", response.data);
        const anonymousId = response.data.anonymous_id;

        if (anonymousId) {
          localStorage.setItem("anonymous_id", anonymousId);
          console.log("익명 아이디 저장:", anonymousId);
        } else {
          console.error("ID 생성 실패: 응답 데이터가 올바르지 않음");
        }
      })
      .catch((error) => console.error("ID 생성 실패:", error));

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
