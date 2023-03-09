import React from "react";
import "../customClasses/Header.css";
import {NYT_LOGO_PATH} from "../constants/Constants"

export default function Header (props) {

    if (props.isLoaded) {
        return <header class="header">
                    <div class="header-inner-div">
                        <p className="Entry-date align-left">{`${new Date(props.items[0].pubDate).toDateString()}`}</p>
                        <div class="align-center"><svg style={{height: "50px", width: "200px"}}viewBox="0 0 184 25" fill="#000"><path d={NYT_LOGO_PATH}></path></svg></div>
                        <p className="align-right">ENG</p>
                    </div>
               </header>
    }
}