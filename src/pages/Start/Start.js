import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import "./Start.css";

export const Start = () => {
    const navigate = useNavigate();

    return (
        <div className="screen">
            <div className="div">
                <div className="home-container">

                    <div className="start-logo-container">
                        <img src="../../../public/images/logo.svg" />
                    </div>

                    <div className="title-text-wrapper">formymeal_</div>


                </div>
            </div>
        </div>
        );
    };


export default Start


