import React, { useEffect, useState } from "react"; // useEffect 추가
import { useNavigate } from "react-router-dom";
import "./Start.css";

export const Start = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // 2초 후에 Home 페이지로 이동
        const timer = setTimeout(() => {
            navigate("/Home");
        }, 2000);

        // 컴포넌트가 언마운트될 때 타이머 클리어
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="screen">
            <div className="div">
                <div className="home-container">

                    <div className="start-logo-container">
                        <img src="/images/logo.svg" alt="Logo" />
                    </div>

                    <div className="title-text-wrapper">formymeal_</div>

                </div>
            </div>
        </div>
    );
};

export default Start;
