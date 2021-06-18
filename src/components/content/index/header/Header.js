import React from "react";
import "./header.css";
// import logo from "../../../../img/danko-logo.png";
import chietkhautoi from "../../../../img/chietkhautoi.jpg";
import goingay from "../../../../img/goingay.jpg";
// import Menus from "./Menus";
const Header = () => {
    return (
        <div className="header">
            <div className="header-maxwidth">
                {/* <Menus /> */}
                <div className="container-none"></div>
                <div className="head-width-60">
                    <div style={{ marginBottom: 42 }}>
                        <p className="text-head">KHÔNG GIAN SỐNG</p>
                        <p className="text-head">THƯỢNG LƯU</p>
                    </div>
                    <div className="flex-row" style={{ margin: "18px 0" }}>
                        <div className="head-chiet-khau">
                            <img src={chietkhautoi} alt="Chiết khấu" />
                        </div>
                        <div className="head-call-now">
                            <a href="tel:0969531916">
                                <img src={goingay} alt="Gọi ngay" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Header;

// const Menus = () => {
//     return (
//         <div className="menus">
//             <a href="/">Trang chủ</a>

//             <a href="/#tong-quan">Tổng quan</a>
//             <a href="/#ly-do">Lý do lựa chọn</a>
//             <a href="/#tien-do">Tiến độ</a>

//             <div>Tin tức</div>
//             <div>Liên hệ</div>
//         </div>
//     );
// };
