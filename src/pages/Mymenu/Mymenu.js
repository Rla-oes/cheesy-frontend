import React, { useState,useEffect } from "react";
import axios from "axios"; // axios 추가
import pen from "./pen.svg";
import profile from "./profile.svg";
import trash from "./trash.svg";
import "./Mymenu.css";
import {Link, useLocation, useNavigate} from "react-router-dom";
import Header from "../../component/Header";

export const Mymenu = () => {
    const [menuItems, setMenuItems] = useState([]); // ✅ API에서 가져온 메뉴 저장
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [deleteId, setDeleteId] = useState(null);

    const anonymous_id = localStorage.getItem("anonymous_id"); // ✅ 로컬스토리지에서 익명 ID 가져오기

    // 🛑 저장된 메뉴 불러오기 (백엔드 API 호출)
    useEffect(() => {
        if (!anonymous_id) return;

        axios.get(`/api/saved-menus?anonymous_id=${anonymous_id}`)
            .then(response => {
                setMenuItems(response.data); // ✅ 불러온 데이터로 상태 업데이트
            })
            .catch(error => {
                console.error("저장된 메뉴 불러오기 실패:", error);
            });
    }, [anonymous_id]);

    // 삭제 버튼 클릭 시
    const handleDeleteClick = (id) => {
        setDeleteId(id);
        setIsModalOpen(true);
    };

    // 없어도 되는 코드인거같은데 일단 냅둠
    const navigate = useNavigate();
    const location = useLocation();
    const category = location.state?.category;

    // 삭제 확인 시 실행( 백엔드 api 호출)
    const handleConfirmDelete = () => {
        if (!deleteId) return;

        axios.delete(`/api/saved-menus/${deleteId}`, {
            data: { anonymous_id }, // ✅ 백엔드에서 ID 검증을 위해 body에 포함
        })
            .then(() => {
                setMenuItems(menuItems.filter((item) => item.id !== deleteId)); // ✅ UI에서 삭제
                setIsModalOpen(false);
                setDeleteId(null);
            })
            .catch(error => {
                console.error("메뉴 삭제 실패:", error);
            });
    };


    // 모달 닫기 (취소)
    const handleCancelDelete = () => {
        setIsModalOpen(false);
        setDeleteId(null);
    };
    const containerStyle = {
        width: "100%",
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
    };

    return (
        <div className="screen">
            <Header title="" />
            <div className="div">
                <div className="profile-container">
                    <img className="profile" alt="Profile" src={profile} />
                </div>

                <div className="menu-title">My Menu</div>

                <div className="Overlap-group">
                    <div className="Frame">
                        <div className="Rectangle">
                            <div className="menu-list">
                                {menuItems.map((item, index) => (
                                    <div className="menu-Item" key={index}>
                                        <div className="menu-text">{item}</div>
                                        <button className="trash-btn" onClick={() => handleDeleteClick(index)}>
                                            <img className="trash" alt="Trash" src={trash} />
                                        </button>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* 🛑 커스텀 삭제 모달 */}
            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal">
                        <p className="modal-text">정말 삭제하시겠습니까?</p>
                        <div className="modal-buttons">
                            <button className="modal-btn confirm" onClick={handleConfirmDelete}>확인</button>
                            <button className="modal-btn cancel" onClick={handleCancelDelete}>취소</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Mymenu