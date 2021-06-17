// import Search from "antd/lib/transfer/search";
import React, { useEffect, useState } from "react";
import "./news.css";
import Right from "./Right";
import TinTuc from "../index/TinTuc";
import tiendo from "../../../img/190521_1.png";
import vitri1 from "../../../img/danko-city-vi-tri-01-1536x864.png";
import top10 from "../../../img/top-10-du-an-nha-o-01.jpeg";
import dankovinhyen from "../../../img/danko-vinh-yen-001.jpeg";
import FormInfo from "../../forminfo/FormInfo";
const News = ({ setHash }) => {
    const [showForm, setShowForm] = useState(false);
    useEffect(() => {
        function setBefore() {
            document.title = "Lưu trữ tin tức - Danko City";
            setHash("#/tin-tuc");
        }
        setBefore();
    });
    useEffect(() => {
        let timer1 = setTimeout(() => setShowForm(true), 1000);
        return () => {
            clearTimeout(timer1);
        };
    }, []);
    const listTD = [
        {
            img: tiendo,
            text1: "Tiến độ dự án Danko City – Ngày 19/5/2021",
            text2: "25/05/2021",
            url: "/tien-do-du-an-danko-city-ngay-19-5-2021",
        },
        {
            img: vitri1,
            text1: "Đất nền Danko City xuất ngoại giao chiết khấu tới 1,2 tỷ",
            text2: "24/05/2021",
            url: "/dat-nen-danko-city-xuat-ngoai-giao-chiet-khau-toi-12-ty",
        },
        {
            img: top10,
            text1: "Danko City được vinh danh top 10 dự án đô thị và nhà ở tiềm năng nhất 2021",
            text2: "24/05/2021",
            url: "/danko-city-duoc-vinh-danh-top-10-du-an-do-thi-va-nha-o-tiem-nang-nhat-2021",
        },
        {
            img: dankovinhyen,
            text1: "Đất Nền Vĩnh Yên Vĩnh Phúc",
            text2: "24/05/2021",
            url: "/dat-nen-vinh-yen-vinh-phuc",
        },
    ];
    return (
        <div>
            <FormInfo showForm={showForm} setShowForm={setShowForm} />
            <div className="width-100 height-100px"></div>
            <div className="news max-width flex-row">
                <div className="width75 news-right">
                    <TinTuc
                        // setHash={setHash}
                        lists={listTD}
                        cssText1="text-700-17-22"
                        cssText2="text-400-12-18"
                        showDate={true}
                    />
                </div>
                <Right />
            </div>
        </div>
    );
};
export default News;
