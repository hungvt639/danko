import React from "react";
import { HashLink as Link } from "react-router-hash-link";
const MenuDrawer = ({ show, setShow }) => {
    function close() {
        setShow(false);
        // setHash(hash);
    }
    return (
        <div className={show ? "menu-drawer" : "menu-drawer width-0"}>
            <div
                onClick={() => setShow(false)}
                className={show ? "menu-close" : "display-none"}
            ></div>
            <div className={show ? "menu-view" : "menu-view width-0"}>
                <div className="flex-end">
                    <svg
                        onClick={() => setShow(false)}
                        className="btn-x"
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </div>

                <ul>
                    <li>
                        <Link onClick={close} to="/">
                            <p>Trang chủ</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/#tong-quan" onClick={close}>
                            <p>Tổng quan</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/#ly-do" onClick={close}>
                            <p>Lý do lựa chọn</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/#tien-do" onClick={close}>
                            <p>Tiến độ</p>
                        </Link>
                    </li>
                    <li>
                        <Link onClick={close} to="/tin-tuc">
                            <p>Tin tức</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/#lien-he" onClick={close}>
                            <p>Liên hệ</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default MenuDrawer;
