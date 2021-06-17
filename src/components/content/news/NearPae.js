import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import lefticon from "../../../img/less_than_50px.png";
import righticon from "../../../img/more_than_50px.png";
const NearPage = ({ leftPage, rightPage }) => {
    return (
        <div className="flex-d-row width-100 near-page">
            <div className="near-left">
                {leftPage ? (
                    <Link to={leftPage.url}>
                        <img src={lefticon} alt="<" />
                        {leftPage.name}
                    </Link>
                ) : (
                    <Fragment />
                )}
            </div>
            <div className="near-right">
                {rightPage ? (
                    <Link to={rightPage.url}>
                        {rightPage.name}
                        <img src={righticon} alt=">" />
                    </Link>
                ) : (
                    <Fragment />
                )}
            </div>
        </div>
    );
};
export default NearPage;
