import React, { useState } from "react";
import logo from "../../../../img/danko-logo.png";
import { HashLink as Link } from "react-router-hash-link";
import btnmenu from "../../../../img/icon-menu.png";
// import { Drawer } from "antd";
import MenuDrawer from "./MenuDrawer";
const Menus = ({ show, setShow, hash }) => {
    const [hover, setHover] = useState(0);

    function checkHover(key) {
        if (hover) return hover === key;
        // const hashs = [
        //     "#/",
        //     "#/#tong-quan",
        //     "#/#ly-do",
        //     "#/#tien-do",
        //     "#/#lien-he",
        // ];
        const hashs = [
            "#/tin-tuc",
            "#/tien-do-du-an-danko-city-ngay-19-5-2021",
            "#/dat-nen-danko-city-xuat-ngoai-giao-chiet-khau-toi-12-ty",
            "#/danko-city-duoc-vinh-danh-top-10-du-an-do-thi-va-nha-o-tiem-nang-nhat-2021",
            "#/dat-nen-vinh-yen-vinh-phuc",
        ];
        if (hashs.includes(hash)) {
            return key > 5;
        } else return key <= 5;
    }
    // console.log(window.location);
    return (
        <div className="menu width-100">
            <div className="header-top max-width">
                <a href="/">
                    <img src={logo} alt="Logo Danko" />
                </a>

                <div className="bnt-menu width-100">
                    <div onClick={() => setShow(true)} className="bnt-menu-img">
                        <img src={btnmenu} alt="Menu" />
                    </div>
                </div>
                <div className="menus">
                    <Link
                        onMouseOver={() => setHover(1)}
                        onMouseOut={() => setHover(0)}
                        // onClick={() => setHash("#/")}
                        className={
                            checkHover(1)
                                ? "menu-link text-700-14-23 menu-link-after"
                                : "menu-link text-700-14-23"
                        }
                        to="/"
                    >
                        Trang ch???
                    </Link>

                    <Link
                        onMouseOver={() => setHover(2)}
                        onMouseOut={() => setHover(0)}
                        // onClick={() => setHash("#/")}
                        className={
                            checkHover(2)
                                ? "menu-link text-700-14-23 menu-link-after"
                                : "menu-link text-700-14-23"
                        }
                        to={{ pathname: "/", hash: "#tong-quan" }}
                    >
                        T???ng quan
                    </Link>
                    <Link
                        onMouseOver={() => setHover(3)}
                        onMouseOut={() => setHover(0)}
                        // onClick={() => setHash("#/")}
                        className={
                            checkHover(3)
                                ? "menu-link text-700-14-23 menu-link-after"
                                : "menu-link text-700-14-23"
                        }
                        to="/#ly-do"
                    >
                        L?? do l???a ch???n
                    </Link>
                    <Link
                        onMouseOver={() => setHover(4)}
                        onMouseOut={() => setHover(0)}
                        // onClick={() => setHash("#/")}
                        className={
                            checkHover(4)
                                ? "menu-link text-700-14-23 menu-link-after"
                                : "menu-link text-700-14-23"
                        }
                        to="/#tien-do"
                    >
                        Ti???n ?????
                    </Link>

                    <a
                        onMouseOver={() => setHover(6)}
                        onMouseOut={() => setHover(0)}
                        // onClick={() => setHash("#/tin-tuc")}
                        className={
                            checkHover(6)
                                ? "menu-link text-700-14-23 menu-link-after"
                                : "menu-link text-700-14-23"
                        }
                        href="https://tintucdanko.blogspot.com/"
                    >
                        Tin t???c
                    </a>
                    <Link
                        onMouseOver={() => setHover(5)}
                        onMouseOut={() => setHover(0)}
                        // onClick={() => setHash("#/")}
                        className={
                            checkHover(5)
                                ? "menu-link text-700-14-23 menu-link-after"
                                : "menu-link text-700-14-23"
                        }
                        to="/#lien-he"
                    >
                        Li??n h???
                    </Link>
                </div>
            </div>
            <MenuDrawer show={show} setShow={setShow} />
        </div>
    );
};
export default Menus;
