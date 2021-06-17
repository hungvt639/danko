import React, { useEffect, useState } from "react";
import Right from "./Right";
import top10 from "../../../img/top-10-du-an-nha-o-01.jpeg";
import chugnhan from "../../../img/top-10-du-an-nha-o-03.jpg";
import batdongsan from "../../../img/top-10-du-an-nha-o-02.jpeg";
import FormInfo from "../../forminfo/FormInfo";
import NearPage from "./NearPae";
const DankoVinhDanh = ({ setHash }) => {
    const [showForm, setShowForm] = useState(false);
    useEffect(() => {
        function setBefore() {
            document.title =
                "Danko City được vinh danh top 10 dự án đô thị và nhà ở tiềm năng nhất 2021 - Danko City";
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
    const leftPage = {
        url: "/dat-nen-vinh-yen-vinh-phuc/#top",
        name: "Đất Nền Vĩnh Yên Vĩnh Phúc",
    };
    const rightPage = {
        url: "/dat-nen-danko-city-xuat-ngoai-giao-chiet-khau-toi-12-ty/#top",
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
                            Danko City được vinh danh top 10 dự án đô thị và nhà
                            ở tiềm năng nhất 2021
                        </h2>
                    </div>
                    <div className="news-content-text">
                        <p>
                            Sáng ngày 26/3/2021, được sự chỉ đạo và bảo trợ của
                            Hiệp hội Bất động sản Việt Nam, Reatimes và VIRES tổ
                            chức Lễ Vinh danh thương hiệu Bất động sản dẫn đầu
                            năm 2020 – 2021 và Tọa đàm Bất động sản Mùa Xuân.
                        </p>
                        <h2>
                            TOP 10 DỰ ÁN ĐÔ THỊ VÀ NHÀ Ở TIỀM NĂNG NHẤT 2021
                        </h2>
                        <p>
                            Tại buổi lễ, KĐT Danko City đã được vinh danh trong
                            Top 10 dự án đô thị và nhà ở tiềm năng nhất năm
                            2021. Danh hiệu này do Tạp chí điện tử Bất động sản
                            Việt Nam (Reatimes) và Viện Nghiên cứu Bất động sản
                            Việt Nam (VIRES) tổ chức Chương trình bình chọn
                            Thương hiệu dẫn đầu thị trường bất động sản Việt Nam
                            2020 – 2021 từ 500.000 độc giả trên hệ thống
                            Reatimes.vn và Hội đồng bình chọn trực tiếp, độc
                            lập, khách quan, bao gồm: 150 nhà báo theo dõi lĩnh
                            vực kinh tế – xây dựng – bất động sản; 30 chuyên gia
                            kinh tế – luật – quy hoạch – kiến trúc – xây dựng –
                            bất động sản hàng đầu của Việt Nam trong tháng
                            12/2020.
                        </p>
                        <img src={top10} alt="Ảnh" />
                        <p>
                            GS. TSKH. Đặng Hùng Võ, nguyên Thứ trưởng Bộ Tài
                            nguyên, Môi trường; Chuyên gia kinh tế, TS. Vũ Đình
                            Ánh trao cúp và chứng nhận{" "}
                            <strong>
                                Top 10 dự án đô thị và nhà ở tiềm năng nhất năm
                                2021
                            </strong>{" "}
                            cho đại diện <strong>Danko Group</strong>
                        </p>
                        <p>
                            <strong>
                                TẠI SAO NÊN ĐẦU TƯ HAY AN CƯ TẠI DANKO CITY?
                            </strong>{" "}
                            – Giá sàn chung đất nền đô thị Thái Nguyên mà được
                            hưởng tiện ích vượt trội. – Khu đô thị có thiết kế
                            cảnh quan đẹp nhất Việt Nam Dot Property Awards 2020
                            – Sở hữu 5 kỷ lục Việt Nam về cổng chào, quảng
                            trường, tháp biểu tượng, sân khấu nhạc nước và số
                            lượng tượng nghệ thuật. – Trung tâm thương mại 5000
                            m2, phố đi bộ, công viên cây xanh, bể bơi, vườn hoa.
                            – Mặt đường lớn nằm trong khu đô thị, quy hoạch đồng
                            bộ, wifi phủ sóng toàn bộ, camera an ninh 24/7. –
                            Đóng tiền 6 đợt trong 15 tháng, vào hợp đồng chỉ từ
                            400 triệu, tính thanh khoản và tiềm năng tăng giá
                            cao
                            <br />
                            <strong>
                                NHẬN BẢNG HÀNG ĐẦU TƯ XUẤT NGOẠI GIAO{" "}
                            </strong>
                            Tỷ suất sinh lời ít nhất 30% mỗi năm
                        </p>
                        <img src={chugnhan} alt="Ảnh" />
                        <p>
                            Kết quả này góp phần ghi nhận những nỗ lực của CĐT
                            Danko Group nói chung và dự án Danko City – Khu đô
                            thị có thiết kế cảnh quan đẹp nhất Việt Nam 2020 uy
                            tín trên thị trường BĐS.
                        </p>
                        <img src={batdongsan} alt="Ảnh" />
                        <p>
                            Ngoài Danko City, 9 cái tên còn lại được xứng danh
                            trong hạng mục này có Vinhomes Grand Park
                            (Vinhomes), Aqua City (Novaland Group), Grandeur
                            Palace – Giảng Võ (Văn Phú – Invest), The Matrix One
                            (MIK Group), The Sol City (Thắng Lợi Group), Ecocity
                            Premia Buôn Ma Thuột (Tập đoàn Capital House), Danko
                            City (Danko Group), Regal One River (Đất Xanh Miền
                            Trung), The Standard Bình Dương (Tập đoàn An Gia),
                            Meyhomes Capital Phú Quốc (Tập đoàn Tân Á Đại
                            Thành).
                        </p>
                        <p>
                            <b>TỔNG QUAN</b>
                            <br />
                            Tên dự án: Khu đô thị Danko City
                            <br />
                            Chủ đầu tư: Công ty cổ phần tập đoàn Danko Group
                            <br />
                            Ví trí:&nbsp;Xã Cao Ngạn và Phường Chùa Hang, TP
                            Thái Nguyên
                            <br />
                            Diện tích: 50ha
                            <br />
                            Sản phẩm: Đất nền nhà ở&nbsp;liền kề, biệt thự đơn
                            lập, biệt thự song lập,&nbsp;shophouse
                            <br />
                            Phân khúc: Quý tộc cao cấp
                            <br />
                            Kiến trúc: Phong cách Tân cổ điển
                            <br />
                            Đơn vị tư vấn kiến trúc: Công ty CP&nbsp;Kiến trúc
                            Niwwin
                            <br />
                            Đơn vị tư vấn thiết kế cảnh quan:&nbsp;Jica Scape
                            <br />
                            Thời điểm khởi công:&nbsp;29 tháng 7 năm 2019
                            <br />
                            Thời điểm bàn giao: Quý III, 2021
                        </p>
                    </div>
                    <NearPage leftPage={leftPage} rightPage={rightPage} />
                </div>
                <Right />
            </div>
        </div>
    );
};
export default DankoVinhDanh;
