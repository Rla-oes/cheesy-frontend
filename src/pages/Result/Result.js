import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { ReactComponent as IconamoonHome } from "./iconamoon_home.svg";
import { ReactComponent as MaterialSymbolsMenuBook } from "./material-symbols_menu-book.svg";
// import frame14 from "./Frame 14.png";
import "./Result.css";

const BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:3000";

const Result = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const menu = location.state?.menu?.name || "메뉴 불러오기 실패";
  const [anonymousId, setAnonymousId] = useState(
    localStorage.getItem("anonymous_id")
  );
  console.log("Retrieved anonymous_id:", anonymousId);

  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (!anonymousId) {
      axios
        .post(`${BASE_URL}/api/users/anonymous-id`)
        .then((response) => {
          setAnonymousId(response.data.id);
          localStorage.setItem("anonymous_id", response.data.id);
        })
        .catch((error) => console.error("익명 ID 생성 실패:", error));
    }
  }, [anonymousId]);

  const saveMenu = () => {
    if (!menu || menu === "메뉴 불러오기 실패" || !anonymousId || isSaving)
      return;

    setIsSaving(true);
    axios
      .post(`${BASE_URL}/api/saved-menus`, {
        anonymous_id: anonymousId,
        menu_id: location.state?.menu?.id,
      })
      .then(() => {
        alert("저장 완료!");
        setIsSaving(false);
        navigate("/Mymenu"); // 저장 완료 후 이동
      })
      .catch((error) => {
        console.error("메뉴 저장 실패:", error);
        setIsSaving(false);
      });
  };

  return (
    <div className="screen">
      <div className="div">
        <div className="text-wrapper">happy meal time!</div>
        {/* overlap-group과 text-wrapper-4를 묶은 새로운 컨테이너 */}
        <div className="overlap-container">
          <div className="overlap-group">
            <div className="text-wrapper-4">{menu}</div>
          </div>
        </div>
        {/* 새로운 컨테이너2 */}
        <div className="action-container">
          {/* restart 버튼 */}
          <button
            className="restart-button"
            onClick={() => navigate("/category")}
          >
            restart
          </button>

          {/* save 버튼 */}
          <button className="save-button" onClick={saveMenu}>
            save
          </button>
        </div>
        <IconamoonHome
          className="iconamoon-home"
          onClick={() => navigate("/Home")}
        />
        <MaterialSymbolsMenuBook
          className="material-symbols"
          onClick={() => navigate("/Mymenu")}
        />
      </div>
    </div>
  );
};

export default Result;
