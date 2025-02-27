import React from "react";


import pen from "./pen.svg";
import profile from "./profile.svg";
import "./Mymenu.css";
import trash from "./trash.svg";


export const Mymenu = () => {
    return (
        <div className="screen">
            {/*id="elementA" style="color: blue;"*/}
            <div>
                <div className="overlap">
                    <img className="profile" alt="Profile" src={profile} />
                    <img className="pen" alt="Pen" src={pen} />
                </div>

                {/*<div>*/}
                {/*    <img className="pen" alt="Pen" src={pen} />*/}
                {/*</div>*/}

                <div className="text-wrapper">My Menu</div>

                <div className="overlap-group">
                    <div className="frame">
                        <div className="rectangle">
                            <div className="frame-2">
                                <div className="overlap-group-wrapper">
                                    <div className="overlap-2">
                                        <div className="text-wrapper-2">불고기</div>

                                        <img className="trash" alt="Trash" src={trash} />
                                    </div>
                                </div>

                                <div className="overlap-group-wrapper">
                                    <div className="overlap-2">
                                        <div className="text-wrapper-2">김치찌개</div>

                                        <img className="trash" alt="Trash" src={trash} />
                                    </div>
                                </div>

                                <div className="overlap-group-wrapper">
                                    <div className="overlap-2">
                                        <div className="text-wrapper-2">제육볶음</div>

                                        <img className="trash" alt="Trash" src={trash} />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>


            </div>
        </div>
    );
};
