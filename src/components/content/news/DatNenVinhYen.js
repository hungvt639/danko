import React, { useEffect, useState } from "react";
import Right from "./Right";
import mapaddress from "../../../img/danko-vinh-yen-vinh-phuc-09.png";
import dankovinhyen from "../../../img/danko-vinh-yen-001.jpeg";
import dankovinhyen2 from "../../../img/danko-vinh-yen-004.png";
import dankodinhtrung from "../../../img/danko-dinh-trung-vinh-yen-vinh-phuc-002.png";
import FormInfo from "../../forminfo/FormInfo";
import NearPage from "./NearPae";
const DatNenVinhYen = ({ setHash }) => {
    const [showForm, setShowForm] = useState(false);
    useEffect(() => {
        function setBefore() {
            document.title = "Đất Nền Vĩnh Yên Vĩnh Phúc - Danko City";
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
    const rightPage = {
        url: "/danko-city-duoc-vinh-danh-top-10-du-an-do-thi-va-nha-o-tiem-nang-nhat-2021",
        name: "Danko City được vinh danh top 10 dự án đô thị và nhà ở tiềm năng nhất 2021",
    };
    return (
        <div>
            <FormInfo showForm={showForm} setShowForm={setShowForm} />
            <div id="top" className="width-100 height-100px"></div>
            <div className="news max-width flex-row">
                <div className="width75 news-content news-left">
                    <div className="news-content-head">
                        <h2 className="text-700-27-35">
                            Đất Nền Vĩnh Yên Vĩnh Phúc
                        </h2>
                    </div>
                    <div className="news-content-text">
                        <h1>ĐẤT NỀN VĨNH YÊN VĨNH PHÚC</h1>
                        <p>Dự án dự kiến triển khai vào Quý III, 2021</p>
                        <p>
                            <strong style={{ fontStyle: "italic" }}>
                                Đặc quyền ưu đãi cho tất cả các nhà đầu tư giai
                                đoạn 1, lựa chọn lô vị trí đẹp, xuất ngoại giao,
                                chiết khấu cao.
                            </strong>
                        </p>
                        <img src={mapaddress} alt="Ảnh" />
                        <p>
                            Dự án Đất nền Vĩnh Yên là dự án Khu đô thị mới, được
                            đầu tư đầy đủ, đồng bộ về hạ tầng kỹ thuật, hạ tầng
                            xã hội, hài hòa với môi trường, phù hợp với Quy
                            hoạch phân khu A1 tỷ lệ 1/2000 đã được UBND tỉnh
                            Vĩnh Phúc phê duyệt tại Quyết định số 804/QĐ-UBND
                            ngày 03/4/2013 và Quyết định số 211/QĐ-UBND ngày
                            20/01/2016.
                        </p>
                        <img src={dankovinhyen} alt="Ảnh" />
                        <p>
                            <span>VỊ TRÍ</span>
                            <br /> Dự án Đất nền Vĩnh Yên nằm trên địa bàn xã
                            Định Trung, tiến tới là Phường Định Trung theo quy
                            hoạch xây dựng của tỉnh Vĩnh Phúc tầm nhìn 2030, mở
                            rộng không gian đô thị của thành phố Vĩnh Yên.
                        </p>
                        <p>LỢI THẾ CỦA VĨNH YÊN</p>
                        <ol>
                            <li dir="ltr">
                                Về vị trí địa lý, đây là trung tâm chính trị,
                                văn hóa, xã hội và kinh tế của tỉnh, gần sân bay
                                quốc tế Nội Bài. Vĩnh Yên có Đầm Vạc có ấn tượng
                                sâu đậm như Tam Đảo của tỉnh Vĩnh Phúc và địa
                                hình đa dạng để phát triển các loại hình kinh
                                tế;
                            </li>
                            <li dir="ltr">
                                Sức phát triển kinh tế tốt: tốc độ tăng trưởng
                                cao; GTGT/người cao
                            </li>
                            <li dir="ltr">
                                Có sự kết nối tốt với Tam Đảo, với Hà Nội và với
                                Phú Thọ. Ngoài ra, thành phố nằm trên hành lang
                                kinh tế Côn Minh – Hà Khẩu – Lao Cai – Hà Nội –
                                Hải Phòng, là điều kiện thuận lợi để hội nhập
                                kinh tế khu vực.
                            </li>
                            <li dir="ltr">
                                Vĩnh Yên nằm trong vùng động lực của Vĩnh Phúc.
                                Cơ hội tiếp cận với các doanh nghiệp FDI Nhật
                                Bản
                            </li>
                        </ol>
                        <p>
                            <span>SẢN PHẨM</span>
                            <br />
                            Dự án Đất nền Vĩnh Yên bao gồm 2 sản phẩm chính Liền
                            kề và Nhà phố shophouse, chủ yếu mặt tiền 6m, diện
                            tích 96m2 trừ một vài lô đặc biệt. Được xây 3 tầng.
                        </p>
                        <p>
                            <span>TIỆN ÍCH</span>
                            <br /> Dự án Đất nền Vĩnh Yên được quy hoạch đồng bộ
                            với nhiều tiện ích đa dạng như quảng trường, công
                            viên cây xanh, khu vui chơi trẻ em, bể bơi.
                        </p>
                        <img src={dankovinhyen2} alt="Ảnh" />
                        <p>
                            Mặt đường chính rộng 30m, mặt đường phụ 15m. Hạ tầng
                            điện đi ngầm toàn bộ. Hệ thống thoát nước đồng bộ.
                        </p>
                        <p>
                            <span>TIẾN ĐỘ</span>
                            <br /> Dự kiến khởi công vào Quý III, 2021
                        </p>
                        <img src={dankodinhtrung} alt="Ảnh" />
                        <div className="img-dec">
                            Hiện trạng chủ yếu là đất nông nghiệp
                        </div>
                        <p>
                            Dự án Đất nền Vĩnh Yên bao gồm đất ở, đất công cộng,
                            đất cây xanh. Đất xây dựng chủ yếu là đất nông
                            nghiệp, đất giao thông khu vực.
                        </p>
                        <p>
                            <strong style={{ fontStyle: "italic" }}>
                                Đặc quyền ưu đãi cho tất cả các nhà đầu tư giai
                                đoạn 1, lựa chọn lô vị trí đẹp, xuất ngoại giao,
                                chiết khấu cao.
                            </strong>
                        </p>
                    </div>
                    <NearPage rightPage={rightPage} />
                </div>
                <Right />
            </div>
        </div>
    );
};
export default DatNenVinhYen;
