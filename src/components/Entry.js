import React from "react";
import PropTypes from "prop-types";
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
                <p className="Entry-date">{`${new Date(publishDate).toDateString()}`}</p>
                <a href={link} rel="noreferrer" target="_blank"><p className="Entry-author">{title}</p></a>
                <a href={link} rel="noreferrer" target="_blank"><p className="Entry-name">{description}</p></a>
                <p className="Entry-date">{`By ${author}`}</p>
               </div>
            <div className="Entry-box-right">
             <a href={link} rel="noreferrer" target="_blank">
                <img
                    src={thumbnailUrl}
                    width="160px"/>
             </a>
            </div>
        </div>
    );
};