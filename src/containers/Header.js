import React from "react";
import "../customClasses/Header.css";
import {NYT_LOGO_PATH} from "../constants/Constants"

export default function Header(props) {

    return <header className="header">
                <div className="header-inner-div">
                    <p className="Entry-date align-left">{`${new Date(props.items[0].pubDate).toDateString()}`}</p>
                    <div className="align-center"><svg style={{height: "50px", width: "200px"}}viewBox="0 0 184 25" fill="#000"><path d={NYT_LOGO_PATH}></path></svg></div>
                    <p className="align-right">ENG</p>
                </div>
           </header>
}