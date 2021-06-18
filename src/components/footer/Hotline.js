import React from "react";
// import "./index.css";
import zaloicon from "../../img/zalo.png";
import phone2 from "../../img/icon-phone2.png";
const Hotline = () => {
    return (
        <div className="hotline-phone">
            <div className="hot-phone">
                <div className="hotline-phone-ring">
                    <div className="quick-alo-ph-circle"></div>
                    <div className="quick-alo-ph-circle-fill"></div>
                </div>
                <div className="quick-alo-ph-img-circle">
                    <a className="pps-btn-img" href="tel:0969531916">
                        <img src={phone2} alt="Số điện thoại" width="50" />
                    </a>
                </div>
                <div className="hotline-bar">
                    <a href="tel:0969531916">
                        <span className="text-hotline">096 9531 916</span>
                    </a>
                </div>
            </div>
            <div className="zalo">
                <a
                    // without="true"
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://zalo.me/0969531916"
                >
                    {" "}
                    <img src={zaloicon} alt="zalo" />
                    <span>Chat Zalo</span>
                </a>
            </div>
        </div>
    );
};
export default Hotline;
