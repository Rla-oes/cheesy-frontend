import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import frame5 from "../Roulette/img/Frame 5.png";
import polygon2 from "../Roulette/img/Polygon 2.svg";
import "./Roulette.css";
import Header from "../../component/Header";

const Roulette = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const category = location.state?.category;
    const [spinning, setSpinning] = useState(false);
    const [anonymousId, setAnonymousId] = useState(
        localStorage.getItem("anonymous_id")
    );
    console.log("Retrieved anonymous_id:", anonymousId); // 로그 확인

    const [menu, setMenu] = useState(null);

    useEffect(() => {
        if (!anonymousId) {
            axios
                .post("/api/users/anonymous-id")
                .then((response) => {
                    setAnonymousId(response.data.id);
                    localStorage.setItem("anonymous_id", response.data.id);
                })
                .catch((error) => console.error("익명 ID 생성 실패:", error));
        }

        if (category) {
            axios
                .get(`/api/menus/random/${category}`)
                .then((response) => {
                    setMenu(response.data);
                })
                .catch((error) => console.error("랜덤 메뉴 불러오기 실패:", error));
        }
    }, [anonymousId, category]);

    const startRoulette = () => {
        if (!menu) {
            alert("메뉴를 로딩할 수 없습니다. 잠시 후 다시 시도해주세요.");
            return;
        }
        setSpinning(true);
        setTimeout(() => {
            setSpinning(false);
            navigate("/result", {
                state: { category, menu: { id: menu.id, name: menu.name } },
            });
        }, 1000);
    };

    return (
        <div className="screen">
            <Header title={category || "카테고리 선택 안됨"} />
            <div className="div">
                <div className="frame" onClick={startRoulette}>
                        <button className="rectangle" >
                            START
                        </button>
                </div>

                <div className="overlap">
                    <motion.img
                        className="img"
                        alt="Frame"
                        src={frame5}
                        animate={{ rotate: spinning ? 1080 : 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    />
                    <img className="polygon" alt="Polygon" src={polygon2} />
                </div>
            </div>
        </div>
    );
};

export default Roulette;