import React, { useEffect, useState } from "react";
import Right from "./Right";
import td1 from "../../../img/td1.png";
import td2 from "../../../img/td2.png";
import td3 from "../../../img/td3.png";
import td4 from "../../../img/td4.png";
import td5 from "../../../img/td5.png";
import td6 from "../../../img/td6.png";
import td7 from "../../../img/td7.png";
import td8 from "../../../img/td8.png";
import td9 from "../../../img/td9.png";
import td10 from "../../../img/td10.png";
import td11 from "../../../img/td11.png";
import td12 from "../../../img/td12.png";
import td13 from "../../../img/td13.png";
import td14 from "../../../img/td14.png";
import FormInfo from "../../forminfo/FormInfo";
import NearPage from "./NearPae";

const TienDoDuAn = ({ setHash }) => {
    const [showForm, setShowForm] = useState(false);
    useEffect(() => {
        function setBefore() {
            document.title =
                "Tiến độ dự án Danko City – Ngày 19/5/2021 - Danko City";
            setHash("#/tin-tuc");
            window.scrollTo(0, 0);
        }
        setBefore();
    });
    useEffect(() => {
        let timer1 = setTimeout(() => setShowForm(true), 1000);
        return () => {
            clearTimeout(timer1);
        };
    }, []);
    const leftPage = {
        url: "/dat-nen-danko-city-xuat-ngoai-giao-chiet-khau-toi-12-ty",
        name: "Đất nền Danko City xuất ngoại giao chiết khấu tới 1,2 tỷ",
    };
    return (
        <div>
            <FormInfo showForm={showForm} setShowForm={setShowForm} />
            <div id="top" className="width-100 height-100px"></div>
            <div className="news max-width flex-row">
                <div className="width75 news-content news-left">
                    <div className="news-content-head">
                        <h2 className="text-700-27-35">
                            Tiến độ dự án Danko City – Ngày 19/5/2021
                        </h2>
                    </div>
                    <div className="news-content-text">
                        <img src={td1} alt="Image1" />
                        <img src={td2} alt="Image2" />
                        <img src={td3} alt="Image3" />
                        <img src={td4} alt="Image4" />
                        <img src={td5} alt="Image5" />
                        <img src={td6} alt="Image6" />
                        <img src={td7} alt="Image7" />
                        <img src={td8} alt="Image8" />
                        <img src={td9} alt="Image9" />
                        <img src={td10} alt="Image10" />
                        <img src={td11} alt="Image11" />
                        <img src={td12} alt="Image12" />
                        <img src={td13} alt="Image13" />
                        <img src={td14} alt="Image14" />
                    </div>
                    <NearPage leftPage={leftPage} />
                </div>
                <Right />
            </div>
        </div>
    );
};
export default TienDoDuAn;
