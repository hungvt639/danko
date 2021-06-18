// import Search from "antd/lib/transfer/search";
import React, { useState } from "react";
import searchicon from "../../../img/search_30px.png";
import { Link } from "react-router-dom";
import tiendo from "../../../img/190521_1.png";
import vitri1 from "../../../img/danko-city-vi-tri-01-1536x864.png";
import top10 from "../../../img/top-10-du-an-nha-o-01.jpeg";
import dankovinhyen from "../../../img/danko-vinh-yen-001.jpeg";
import Form from "../form/Form";
const Right = () => {
    console.log(window.location);
    function getSearch() {
        const hash = escape(window.location.hash);
        const index = hash.indexOf("s=");
        if (index === -1) return "";
        const search = hash.substring(index + 2);
        return search.replaceAll("-", " ");
    }

    // console.log("s", );

    const [value, setValue] = useState(getSearch());
    return (
        <div className="width25 border-left news-right">
            <SearchForm value={value} setValue={setValue} />
            <TinTucMoiNhat />
            <NhanBaoGia />
        </div>
    );
};
export default Right;

const SearchForm = ({ value, setValue }) => {
    function onSubmit(e) {
        e.preventDefault();
        return;
    }
    return (
        <form onSubmit={onSubmit} className="form search-form">
            <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Tìm kiếm thông tin"
            />
            <button type="submit">
                <Link
                    to={{
                        pathname: "/tin-tuc",

                        search: value ? `?s=${value.replaceAll(" ", "-")}` : "",
                    }}
                >
                    <img src={searchicon} alt="Search" />
                </Link>
            </button>
        </form>
    );
};
const TinTucMoiNhat = () => {
    const lists = [
        {
            img: tiendo,
            name: "Tiến độ dự án Danko City – Ngày 19/5/2021",
            url: "/tien-do-du-an-danko-city-ngay-19-5-2021",
        },
        {
            img: vitri1,
            name: "Đất nền Danko City xuất ngoại giao chiết khấu tới 1,2 tỷ",
            url: "/dat-nen-danko-city-xuat-ngoai-giao-chiet-khau-toi-12-ty",
        },
        {
            img: top10,
            name: "Danko City được vinh danh top 10 dự án đô thị và nhà ở tiềm năng nhất 2021",
            url: "/danko-city-duoc-vinh-danh-top-10-du-an-do-thi-va-nha-o-tiem-nang-nhat-2021",
        },
        {
            img: dankovinhyen,
            name: "Đất Nền Vĩnh Yên Vĩnh Phúc",
            url: "/dat-nen-vinh-yen-vinh-phuc",
        },
    ];
    return (
        <div className="news-new">
            <div className="news-head">
                <h3 className="text-600-16-17">TIN TỨC MỚI NHẤT</h3>
            </div>
            <ul>
                {lists.map((lis, i) => {
                    return (
                        <li
                            className={
                                i === lists.length - 1 ? "" : "border-bottom"
                            }
                            key={i}
                        >
                            <div style={{ marginBottom: "10px" }}>
                                <img src={lis.img} alt={lis.name} />
                                <Link to={lis.url}>{lis.name}</Link>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
const NhanBaoGia = () => {
    return (
        <div className="information">
            <div className="news-head">
                <h3 className="text-600-16-17">TIN TỨC MỚI NHẤT</h3>
            </div>
            <Form color="none" top="0" paddingMenu="0" />
        </div>
    );
};
