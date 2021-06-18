import React, { useEffect, useState } from "react";
import Header from "./header/Header";
import tongquan from "../../../img/tongquan.jpg";
import homatrong from "../../../img/danko-city-ho-mat-rong.jpg";
import Form from "../form/Form";
import "./index.css";
import quangtruong from "../../../img/danko-city-quang-truong.jpg";
import congtrao from "../../../img/cong-trao.jpg";
import thapchienthang from "../../../img/danko-city-thap-chien-thang-victory.jpg";
import dailo from "../../../img/fs.jpg";
import matrong from "../../../img/ho-mat-rong.jpg";
import btndownpdf from "../../../img/btn-dowloand-pdf.jpg";
import brochure from "../../../brochure.pdf";
import luytien from "../../../img/luy-tien.jpg";
import vitri from "../../../img/vi-tri.jpg";
import docbanthietke from "../../../img/doc-ban-thiet-ke.jpg";
import songdangcap from "../../../img/song-dang-cap.jpg";
import tiendo from "../../../img/190521_1.png";
import vitri1 from "../../../img/danko-city-vi-tri-01-1536x864.png";
import top10 from "../../../img/top-10-du-an-nha-o-01.jpeg";
import dankovinhyen from "../../../img/danko-vinh-yen-001.jpeg";
import dankocity from "../../../img/z2511609212636_f8ae50cec1f25bc39c99f365dac1a347.jpg";
import dankoprofile from "../../../img/z2510393917894_58d8d9968147769f92471f53826367c3.jpg";
import TinTuc from "./TinTuc";
import logo from "../../../img/danko-logo.png";
import iconphone from "../../../img/phone_30px.png";
import Footer from "../../footer/Footer";
import FormInfo from "../../forminfo/FormInfo";
const Home = ({ setHash }) => {
    const [showForm, setShowForm] = useState(false);
    useEffect(() => {
        function setBefore() {
            document.title = "Danko City Thái Nguyên";
            setHash("#/");
            // window.scrollTo(0, 0);
        }
        setBefore();
    });
    useEffect(() => {
        let timer1 = setTimeout(() => setShowForm(true), 1000);
        return () => {
            clearTimeout(timer1);
        };
    }, []);

    // console.log(window);
    return (
        <div>
            <FormInfo showForm={showForm} setShowForm={setShowForm} />
            <Header />
            <div className="max-width">
                <TongQuan />
                <FormKinhMoi />
                <SuLuaChonOBan />
                <TienDo />
                <LyDo />
            </div>
            <DauTuSinhLoi />
            <div className="max-width">
                <TinTucs />
            </div>
            <Contact />
            <Footer />
        </div>
    );
};
export default Home;

const TongQuan = () => {
    return (
        <div id="tong-quan" className="flex-row">
            <div className="padding-15 width-50">
                <h3 style={{ color: "#9c6d27", fontWeight: "500" }}>
                    KIẾN TẠO CỘNG ĐỒNG TINH HOA
                </h3>
                <h1 style={{ color: "#003366" }}>Danko City</h1>
                <p style={{ color: "#36587a", paddingBottom: "20px" }}>
                    Tọa lạc tại xã Cao Ngạn và phường Chùa Hang, TP Thái Nguyên,
                    cách trung tâm hành chính 1,5km theo hướng đi qua cầu Bến
                    Tượng. Danko City sở hữu quỹ đất đẹp nhất tại Thái Nguyên,
                    nơi có kết nối giao thông thuận tiện và giá trị cao về mặt
                    phong thuỷ.
                </p>
                <p style={{ color: "#36587a" }}>
                    Danko City được thiết kế từ cảm hứng hoàng kim tránh lệ của
                    cung điện Versailles – cung điện lộng lẫy nhất Châu Âu, mang
                    tới các sản phẩm đa dạng bao gồm liền kề, biệt thự,
                    shophouse cùng hệ thống hơn 88 tiện ích xứng tầm. Nhà phát
                    triển BĐS Danko Group đang nỗ lực không ngừng nghỉ để viết
                    lên câu chuyện mới tại Thái Nguyên – vùng đất đang vươn mình
                    mạnh mẽ.
                </p>
            </div>
            <div className="padding-15 width-50">
                <img className="width-100" src={tongquan} alt="Tổng quan" />
            </div>
        </div>
    );
};

const FormKinhMoi = () => {
    return (
        <div className="form-kinh-moi flex-row">
            <div className="width-33">
                <img className="width-100" src={homatrong} alt="Hồ mắt rồng" />
            </div>
            <div className="width-33 text-center">
                <h4>Kính mời quý anh chị tham dự</h4>
                <h4>Tiệc trà khám phá cơ hội đầu tư</h4>
                <h3>08:30 NGÀY 30/05, VĂN PHÒNG DỰ ÁN DANKO CITY</h3>
            </div>
            <div className="width-33">
                <Form color="#d0f5e3" />
            </div>
        </div>
    );
};

const SuLuaChonOBan = () => {
    const values = [
        {
            img: quangtruong,
            name: "KĐT CÓ THIẾT KẾ CẢNH QUAN",
            text1: "ĐẸP NHẤT VIỆT NAM",
            text2: "Dot Property Vietnam Awards 2020 – giải thưởng hàng đầu trong lĩnh vực BĐS",
        },
        {
            img: congtrao,
            name: "CỔNG CHÀO KĐT LỚN NHẤT VN",
            text1: "CỔNG CHÀO THE LIGHT",
            text2: "Nơi ánh sáng không bao giờ tắt, biểu tượng của tài lộc và thịnh vượng",
        },
        {
            img: thapchienthang,
            name: "QUẢNG TRƯỜNG TRÁNG LỆ NHẤT VN",
            text1: "VICTORY",
            text2: "Quảng trường 35.000m2 với sân khấu nhạc nước hiện đại cùng tháp biểu tượng cao 42m",
        },
        {
            img: dailo,
            name: "ĐẠI LỘ SẦM UẤT",
            text1: "CHAMPS-ÉLYSÉES",
            text2: "Con đường mua sắm sầm uất nhất tại Thái Nguyên với hơn 600 shophouse cùng TTTM",
        },
        {
            img: matrong,
            name: "MẠCH NGUỒN TỰ NHIÊN",
            text1: "HỒ MẮT RỒNG",
            text2: "Không gian xanh, mạch nước tự nhiên cùng bến du thuyền sang trọng 1 triệu USD",
        },
    ];
    return (
        <div className="flex-row">
            <div className="width-33 padding-15">
                <div>
                    <h3 style={{ color: "#ff6600" }}>
                        CHÚNG TÔI MANG TỚI NHỮNG GIÁ TRỊ TỐT NHẤT VÀ
                    </h3>
                    <p style={{ color: "#003366" }} className="text-700-27-35">
                        Lựa chọn là ở bạn
                    </p>
                    <p>
                        Dự án đuợc nghiên cứu và tính toán tỉ mỉ, hướng tới
                        không gian sống hài hoà giữa kiến trúc và cảnh quan.
                        Danko City sở hữu 5{" "}
                        <span style={{ color: "#ff6600" }}>
                            kỷ lục hàng đầu Việt Nam
                        </span>{" "}
                        về cổng chào, quảng trường, tháp biểu tượng, sân khấu
                        nhạc nước và số lượng tượng nghệ thuật. Hứa hẹn sẽ mang
                        một làn gió mới vào thị trường BĐS Thái Nguyên và khu
                        vực.
                    </p>
                    <a href={brochure}>
                        <img src={btndownpdf} alt="Danko City" />
                    </a>
                </div>
            </div>
            {values.map((val, i) => {
                return (
                    <div key={i} className="width-33 padding-15">
                        <div
                            className="width-100"
                            style={{ backgroundColor: "#224265" }}
                        >
                            <div className="image-cover">
                                <img
                                    className="width-100"
                                    src={val.img}
                                    alt={val.name}
                                />
                            </div>
                            <div className="box-text1">
                                <h5>{val.name}</h5>
                                <h2>{val.text1}</h2>
                                <p>{val.text2}</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

const TienDo = () => {
    return (
        <div id="tien-do" className="flex-row">
            <div className="width-60 padding-15">
                <h3 style={{ color: "#ffcc00" }}>CẬP NHẬT THÁNG 4, 2021</h3>
                <h1 style={{ color: "#003366" }}>Tiến độ thần tốc</h1>
                <p>
                    Tính tới tháng 04/2021, công tác GPMB đạt 90%, xây dựng hạ
                    tầng đạt 85%. Hoàn thiện cổng chào KĐT The Light, tháp biểu
                    tượng Victory. Shophouse khu vực cổng chỉnh và phố đi bộ đã
                    cất nóc . Dự kiến khánh thành TTTM Danko Plaza trong tháng
                    7/2021. Phần lớn các hạng mục đang được đẩy nhanh tiến độ 3
                    ca một ngày để đưa KĐT vào hoạt động trong Quý I / 2022.
                </p>
            </div>
            <div className="width-40 padding-15">
                <div className="box-video">
                    <p>
                        <iframe
                            src="https://www.youtube.com/embed/aWPN5yreMrI"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </p>
                </div>

                {/* <img className="width-100" src={video} alt="video" /> */}
            </div>
        </div>
    );
};

const LyDo = () => {
    return (
        <div id="ly-do" className="width-100">
            <h3
                style={{
                    color: "#ff6600",
                    padding: "0 15px",
                    marginBottom: "1.3em",
                }}
            >
                TẠI SAO NÊN AN CƯ HAY ĐẦU TƯ
            </h3>
            <h1
                style={{
                    color: "#333333",
                    padding: "0 15px",
                    marginBottom: ".5em",
                }}
            >
                Tại Danko City
            </h1>
            <div className="flex-row">
                <div className="display-block width-25 padding-15">
                    <img
                        className="width-100 border-radius-10 object-fit height-100"
                        src={luytien}
                        alt="Giá trị lũy tiến"
                    />
                </div>
                <div className="display-block width-25 padding-15">
                    <img
                        className="width-100 border-radius-10 object-fit height-100"
                        src={vitri}
                        alt="Vị trí trung tâm"
                    />
                </div>

                <div className="display-block width-25 padding-15">
                    <img
                        className="width-100 border-radius-10 object-fit height-100"
                        src={docbanthietke}
                        alt="Độc bản thiết kế"
                    />
                </div>

                <div className="display-block width-25 padding-15">
                    <img
                        className="width-100 border-radius-10 object-fit height-100"
                        src={songdangcap}
                        alt="Sống đẳng cấp"
                    />
                </div>
            </div>
        </div>
    );
};

const DauTuSinhLoi = () => {
    return (
        <div className="width-100 dau-tu">
            <div className="box-text2">
                <h4 className="margin-btn-10">ĐẦU TƯ SINH LỜI 30% NĂM</h4>
                <p
                    style={{ color: "#ffffff" }}
                    className="text-700-41-53 margin-btn-10"
                >
                    DANKO CITY
                </p>
                <p style={{ color: "#ffffff" }}>
                    Duy nhất trong tháng 05, xuất ngoại giao chiết khấu trực
                    tiếp tới 1,2 tỷ/căn. Dòng tiền đầu tư ban đầu từ 500 triệu,
                    tiến độ 6 đợt trong 15 tháng không mất lãi.
                </p>
                <div className="width-58 padding-15">
                    <a href="tel:0904234886" target="_self">
                        <button className="text-700-24-38 btn-tel">
                            GỌI NGAY 090 4234 886
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};
const TinTucs = () => {
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
        <div className="tin-tuc width-100">
            <h3 style={{ color: "#ff6600" }}>TIN TỨC MỚI NHẤT</h3>
            <p className="text-700-41-53">Danko City</p>
            <TinTuc
                // setShowForm={setShowForm}
                // setHash={setHash}
                lists={listTD}
                cssText1="text-700-17-22"
                cssText2="text-400-12-18"
            />
            <div className="width-100 flex-row">
                <div className="padding-15 div-none"></div>
                <div className="width-41 padding-15">
                    <img
                        className="width-100"
                        src={dankocity}
                        alt="Danko City"
                    />
                    <img
                        className="width-100"
                        src={dankoprofile}
                        alt="Danko City Address"
                    />
                </div>
            </div>
        </div>
    );
};

const Contact = () => {
    return (
        <div id="lien-he" className="contact width-100">
            <div className="flex-row max-width">
                <div className="width-25 padding-15">
                    <div className="contact-img">
                        <img
                            className="width-100"
                            src={logo}
                            alt="Logo Danko"
                        />
                    </div>
                </div>
                <div className="width-33 padding-15">
                    <h3 className="text-600-16-17">LIÊN HỆ VỚI CHÚNG TÔI</h3>
                    <p className="text-700-18-29">
                        Bộ phận hỗ trợ khách hàng 24/7.
                    </p>
                    <p className="text-400-16-26">
                        Với đội ngũ tư vấn chuyên nghiệp
                    </p>
                    <a href="tel:0904234886" className="text-700-16-25 link">
                        <img
                            className="icon-phone"
                            src={iconphone}
                            alt="Phone"
                        />
                        HOTLINE : 090 4234 886
                    </a>
                </div>

                <div className="width-33 padding-15 box-text4">
                    <h3 className="text-600-16-17">LÝ DO LỰA CHỌN CHÚNG TÔI</h3>
                    <p className="text-400-16-26">
                        ♦ Cam kết bảo mật thông tin cá nhân khách hàng
                    </p>
                    <p className="text-400-16-26">
                        ♦ Trở thành cầu nối vững chắc, chuyên nghiệp giữa khách
                        hàng và chủ đầu tư
                    </p>
                    <p className="text-400-16-26">
                        ♦ Hỗ trợ tư vấn trực tiếp chuyên sâu, chọn căn, tầng đẹp
                        nhất
                    </p>
                    <p className="text-400-16-26">
                        ♦ Cung cấp bảng giá gốc, hỗ trợ quý khách làm thủ tục,
                        hợp đồng
                    </p>
                    <p className="text-400-16-26">
                        ♦ Khách hàng được xem nhà mẫu trực tiếp
                    </p>
                    <p className="text-400-16-26">
                        ♦ Không thu thêm bất cứ khoản phí nào
                    </p>
                </div>
            </div>
        </div>
    );
};
