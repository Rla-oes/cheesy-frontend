import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ReactComponent as IconamoonHome } from "./iconamoon_home.svg";
import { ReactComponent as MaterialSymbolsMenuBook } from "./material-symbols_menu-book.svg";
import frame14 from "./Frame 14.png";
import "./Result.css";

const Result = () => {
    const navigate = useNavigate();
    const [menu, setMenu] = useState("loading...");
    const anonymousId = localStorage.getItem("anonymous_id");

    useEffect(() => {
        axios.get("/api/menus/random-by-category?category_id=1")
            .then(response => setMenu(response.data.name))
            .catch(error => {
                console.error("랜덤 메뉴 가져오기 실패:", error);
                setMenu("메뉴 불러오기 실패");
            });
    }, []);

    const saveMenu = () => {
        if (!menu || menu === "loading..." || menu === "메뉴 불러오기 실패" || !anonymousId) return;

        axios.post("/api/save-menu", {
            anonymous_id: anonymousId,
            menu_name: menu
        })
            .then(() => alert("저장 완료!"))
            .catch(error => console.error("메뉴 저장 실패:", error));
    };

    return (
        <div className="screen">
            <div className="div">
                <div className="text-wrapper">happy meal time!</div>
                <div className="overlap-group">
                    <div className="text-wrapper-4">{menu}</div>
                </div>
                <div className="div-wrapper" onClick={() => navigate("/Roulette") }>
                    <div className="text-wrapper-3">restart</div>
                </div>
                <div className="frame" onClick={saveMenu}>
                    <div className="text-wrapper-2">save</div>
                </div>
                <IconamoonHome className="iconamoon-home" onClick={() => navigate("/Home")} />
                <MaterialSymbolsMenuBook className="material-symbols" onClick={() => navigate("/Mymenu")} />
                <img className="img" alt="Frame" src={frame14} />
            </div>
        </div>
    );
};

export default Result;
