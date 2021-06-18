import React from "react";
import icon from "../../img/expand_arrow_50px.png";
import BackToTop from "react-back-to-top-button";

const BackToTops = () => {
    return (
        <BackToTop
            showOnScrollUp={false}
            showAt={20}
            speed={1500}
            easing="easeInOutQuint"
        >
            <img className="back-to-tops" src={icon} alt="^" />
        </BackToTop>
    );
};
export default BackToTops;
