import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import HeaderResultPage from "../../component/HeaderResultPage";
import "./Result.css";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

const Result = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const menu = location.state?.menu?.name || "메뉴 불러오기 실패";
  const [anonymousId, setAnonymousId] = useState(
    localStorage.getItem("anonymous_id")
  );
  const [isSaving, setIsSaving] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!anonymousId) {
      axios
        .post(`${BASE_URL}/api/users/anonymous-id`, { withCredentials: true })
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
      .post(
        `${BASE_URL}/api/saved-menus`,
        {
          anonymous_id: anonymousId,
          menu_id: location.state?.menu?.id,
        },
        { withCredentials: true }
      )
      .then(() => {
        setIsSaving(false);
        setIsModalOpen(true);
      })
      .catch((error) => {
        console.error("메뉴 저장 실패:", error);
        setIsSaving(false);
      });
  };

  const handleConfirm = () => {
    setIsModalOpen(false);
    navigate("/Mymenu");
  };

  return (
    <div className="screen">
        <HeaderResultPage title="결과" />
        <div className="div">
            <div className="text-wrapper">happy meal time!</div>

            <div className="overlap-container">
                <div className="overlap-group">
                    <div className="text-wrapper-4">{menu}</div>
                </div>
            </div>

            <div className="action-container">
                <button className="restart-button" onClick={() => navigate("/category")}>
                    restart
                </button>
                <button className="save-button" onClick={saveMenu}>
                    save
                </button>
            </div>

            <img
                src="/images/Frame%2014.png"
                alt="결과 이미지"
                className="bottom-image"
            />
        </div>

        {/* ✅ 모달만 아래에 추가 */}
        {isModalOpen && (
            <div className="modal-overlay">
                <div className="modal">
                    <p className="modal-text">저장 완료!</p>
                    <div className="modal-buttons">
                        <button className="modal-btn confirm" onClick={handleConfirm}>
                            확인
                        </button>
                    </div>
                </div>
            </div>
        )}
    </div>
);


export default Result;
