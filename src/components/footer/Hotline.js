import React, { useState } from "react";
// import "./index.css";
import zaloicon from "../../img/zalo.png";
import phone2 from "../../img/icon-phone2.png";
import vibericon from "../../img/viber_32px.png";
import fbicon from "../../img/fbicon.png";
import up from "../../img/double_up_32px.png";
const Hotline = () => {
    const [show, setShow] = useState(false);
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

            {/* <div className={show ? "mess" : "mess height-0"}> */}
            <div className={show ? "fb" : "fb height-0"}>
                <a
                    // without="true"
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.facebook.com/%C4%90%E1%BA%A7u-t%C6%B0-danko-101265888876974"
                >
                    {" "}
                    <img src={fbicon} alt="zalo" />
                    <span>Facebook</span>
                </a>
            </div>
            <div className={show ? "zalo" : "zalo height-0"}>
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
            <div className={show ? "viber" : "viber height-0"}>
                <a
                    href="viber://contact?number=%2B84969531916"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <img src={vibericon} alt="Viber" />
                    <span>Viber</span>
                </a>
            </div>
            {/* </div> */}

            <div
                onClick={() => setShow(true)}
                className={!show ? "show" : "show width-0"}
            >
                <img src={up} alt="up" /> <span>Mạng xã hội</span>
            </div>

            <div
                onClick={() => setShow(false)}
                className={show ? "close-show-menu" : "display-none"}
            />
        </div>
    );
};
export default Hotline;
