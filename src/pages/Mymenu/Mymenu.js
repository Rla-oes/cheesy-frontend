import React, { useState } from "react";
import pen from "./pen.svg";
import profile from "./profile.svg";
import trash from "./trash.svg";
import "./Mymenu.css";
import { ReactComponent as IconamoonHome } from "../Roulette/img/iconamoon_home.svg";
import { ReactComponent as MaterialSymbolsArrowBackRounded } from "../Roulette/img/material-symbols_arrow-back-rounded.svg";

import {Link, useLocation, useNavigate} from "react-router-dom";
import Header from "../../component/Header";

export const Mymenu = () => {
    const [menuItems, setMenuItems] = useState(["불고기", "김치찌개", "제육볶음"]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [deleteIndex, setDeleteIndex] = useState(null);

    const handleDeleteClick = (index) => {
        setDeleteIndex(index);
        setIsModalOpen(true);
    };

    const navigate = useNavigate();
    const location = useLocation();
    const category = location.state?.category;

    // 삭제 확인 시 실행
    const handleConfirmDelete = () => {
        setMenuItems(menuItems.filter((_, i) => i !== deleteIndex));
        setIsModalOpen(false);
        setDeleteIndex(null);
    };

    // 모달 닫기 (취소)
    const handleCancelDelete = () => {
        setIsModalOpen(false);
        setDeleteIndex(null);
    };
    const containerStyle = {
        width: "100%",
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
    };

    return (
        <div className="screen">
            <div className="div">
                {/*<Header title="" />*/}
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