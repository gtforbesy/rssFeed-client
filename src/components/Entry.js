import React from "react";
import "../customClasses/Entry.css";

export default function Entry ({
    author = "",
    link = "",
    title = "",
    description = "",
    publishDate = "",
    thumbnailUrl = "",
}) {
    return (
        <div className="Entry-root">
            <div className="Entry-box-left">
                <p className="Entry-subtext">{`${new Date(publishDate).toDateString()}`}</p>
                <a href={link} rel="noreferrer" target="_blank"><p className="Entry-title">{title}</p></a>
                <a href={link} rel="noreferrer" target="_blank"><p className="Entry-name">{description}</p></a>
                <p className="Entry-subtext">{`By ${author}`}</p>
               </div>
            <div className="Entry-box-right">
             <a href={link} rel="noreferrer" target="_blank">
                <img alt=""
                    src={thumbnailUrl}
                    width="160px"/>
             </a>
            </div>
        </div>
    );
};