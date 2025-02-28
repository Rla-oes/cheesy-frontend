import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import { ReactComponent as IconamoonHome } from "../roulette/img/iconamoon_home.svg";
import { ReactComponent as MaterialSymbolsArrowBackRounded } from "../roulette/img/material-symbols_arrow-back-rounded.svg";
import frame5 from "../roulette/img/Frame 5.png";
import polygon2 from "../roulette/img/Polygon 2.svg";
import "../roulette/roulette.css";

const Roulette = () => {
    const navigate = useNavigate();
    const [spinning, setSpinning] = useState(false);
    const [anonymousId, setAnonymousId] = useState(localStorage.getItem("anonymous_id"));

    useEffect(() => {
        if (!anonymousId) {
            axios.post("/api/anonymous-id")
                .then(response => {
                    setAnonymousId(response.data.anonymous_id);
                    localStorage.setItem("anonymous_id", response.data.anonymous_id);
                })
                .catch(error => console.error("익명 ID 생성 실패:", error));
        }
    }, [anonymousId]);

    const startRoulette = () => {
        setSpinning(true);
        setTimeout(() => {
            setSpinning(false);
            navigate("/result");
        }, 3000);
    };

    return (
        <div className="screen">
            <div className="div">
                <div className="frame" onClick={startRoulette}>
                    <div className="overlap-group">
                        <div className="rectangle" />
                        <div className="START">START</div>
                    </div>
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

                <IconamoonHome className="iconamoon-home" onClick={() => navigate("/home")} />
                <MaterialSymbolsArrowBackRounded className="material-symbols" onClick={() => navigate(-1)} />
            </div>
        </div>
    );
};

export default Roulette;