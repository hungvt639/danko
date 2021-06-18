import React, { useEffect, useState } from "react";
import Right from "./Right";
import vitri from "../../../img/vitri.png";
import bietthu from "../../../img/danko-city-biet-thu-don-lap-00006.jpg";
import quangtruong from "../../../img/danko-city-quang-truong-00001.jpg";
import quangtruong2 from "../../../img/danko-city-quang-truong-00002.jpg";
import homatrong from "../../../img/danko-city-ho-mat-rong-00006.jpg";
import plaza from "../../../img/danko-city-danko-plaza-00002-1.jpg";
import FormInfo from "../../forminfo/FormInfo";
import NearPage from "./NearPae";
const DatNenDanko = ({ setHash }) => {
    const [showForm, setShowForm] = useState(false);
    useEffect(() => {
        function setBefore() {
            document.title =
                "Đất nền Danko City xuất ngoại giao chiết khấu tới 1,2 tỷ - Danko City";
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
        url: "/danko-city-duoc-vinh-danh-top-10-du-an-do-thi-va-nha-o-tiem-nang-nhat-2021",
        name: "Danko City được vinh danh top 10 dự án đô thị và nhà ở tiềm năng nhất 2021",
    };
    const rightPage = {
        url: "/tien-do-du-an-danko-city-ngay-19-5-2021",
        name: "Tiến độ dự án Danko City - Ngày 19/5/2021",
    };
    return (
        <div>
            <FormInfo showForm={showForm} setShowForm={setShowForm} />
            <div id="top" className="width-100 height-100px"></div>
            <div className="news max-width flex-row">
                <div className="width75 news-content news-left">
                    <div className="news-content-head">
                        <h2 className="text-700-27-35">
                            Đất nền Danko City xuất ngoại giao chiết khấu tới
                            1,2 tỷ
                        </h2>
                    </div>
                    <div className="news-content-text">
                        <h3>
                            Xuất ngoại giao chiết khấu tới 1,2 tỷ/căn, vị trí
                            thuộc phân khu đẹp nhất dự án.
                        </h3>
                        <p>
                            Ưu đã tặng vàng, khách đầu tư đất nền Danko City
                            nhận ngay 3 năm tiền thuê mặt bằng tại trung tâm
                            thương mại Danko Plaza. Key tăng giá mạnh khi khu đô
                            thị đi vào hoạt động trong đầu năm 2022.
                        </p>
                        <p>
                            Danko City là dự án tâm điểm tại Thái Nguyên và khu
                            vực phía bắc, phân khúc bất động sản cao cấp. Khu đô
                            thị sang trọng với kiến trúc Tân cổ điển và hệ thống
                            88+ tiện ích: Công viên trung tâm, hồ điều hoà, sân
                            khấu nhạc nước, quảng trường 3,5 ha.
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
                            <br />
                            Hotline: 096 9531 916
                        </p>

                        <p>
                            <span>VỊ TRÍ</span>
                            <br />
                            Dự án khu đô thị Danko City nằm tại Phường Chùa
                            Hang, Thành phố Thái Nguyên. Dự án cách quảng trường
                            Võ Nguyên Giáp – quảng trường trung tâm Thành phố
                            Thái Nguyên 1,5 km. Nằm tại vùng đất “huyền vũ Cổ
                            Rùa” của Thái Nguyên, nơi long mạch đất trời hội tụ,
                            tiếp giáp núi Chùa Hang – địa danh đã nổi tiếng từ
                            thời vua Lý Thánh Tông.
                        </p>
                        <img src={vitri} alt="Vị trí" />
                        <p>
                            Danko City tiếp giáp hai trục đường lớn quốc lộ 1B
                            và quốc lộ 17. Hai tuyến đường vành đai huyết mạch
                            của Thành phố Thái Nguyên, kết nối trục Đông – Tây.
                            Danko City cách sân bệnh viện Đa khoa TW Thái Nguyên
                            2.5 km, các trung tâm hành chính Tỉnh 1,5 km, cách
                            các trường ĐH lớn tại Thái Nguyên 3 km.
                        </p>
                        <p>
                            Hàng nghìn chuyên gia người nước ngoài làm việc tại
                            các khu công nghiệp đã bắt đầu lựa chọn TP Thái
                            Nguyên làm nơi sinh sống, thay vì Hà Nội. Môi trường
                            sống trong lành, không tắc đường, giao thông thuận
                            tiện và mặt bằng giá cả chung rất tốt.
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
                            cao – Hotline ban kinh doanh: 096 9531 916
                        </p>
                        <p>
                            Việc quy hoạch một khu đô thị cao cấp tại Thái
                            Nguyên với đầy đủ hạ tầng tiện ích là cấp thiết. Đáp
                            ứng các nhu cầu vui chơi mua sắm của người dân. Nhu
                            cầu được ở trong một khu đô thị đồng bộ của tầng lớp
                            có thu nhập tốt tại Thái Nguyên và khu vực.
                        </p>

                        <p>
                            <span>CHỦ ĐẦU TƯ</span>
                            <br />
                            CÔNG TY CỔ PHẦN TẬP ĐOÀN DANKO
                            <br />
                            Trụ sở: Tầng 1, nhà C6, đường Trần Hữu Đức – Khu đô
                            thị Mỹ Đình 1, P. Cầu Diễn, Q. Nam Từ Liêm, TP. Hà
                            Nội
                            <br />
                            Vốn điều lệ 1.530 tỷ đồng tính tới tháng 7/2020
                        </p>
                        <p>
                            CÁC DỰ ÁN ĐÃ TRIỂN KHAI <br />
                            Khu đô thị Danko City, Phường Chùa Hang, TP Thái
                            Nguyên
                            <br />
                            Khu đô thị Danko Avenue, Phường Bách Quang, TP Sông
                            Công, Thái Nguyên
                        </p>
                        <p>
                            <span>SẢN PHẨM</span>
                            <br />
                            Danko City mang tới thị trường hơn 1.500 sản phẩm
                            bất động sản cao cấp. Bao gồm liền kề, biệt thự,
                            shophouse. Mặt tiền trung bình từ 6 tới 16 mét, diện
                            tích 96m2 -615m2. Đa dạng các loại sản phẩm phục vụ
                            đầy đủ nhu cầu của khách hàng.
                        </p>
                        <img src={bietthu} alt="Ảnh" />
                        <div className="img-dec">
                            Cảnh quan 5 sao tại khu biệt thự đơn lập King Island
                        </div>
                        <p>
                            <span>TIỆN ÍCH</span>
                            <br />
                            Tiện ích nội khu đa dạng và đẳng cấp với Quảng
                            trường, sân khấu nhạc nước, công viên lớn, bể bơi,
                            bến du thuyền, trung tâm thương mại
                        </p>
                        <img src={quangtruong} alt="Ảnh" />
                        <div className="img-dec">
                            Khu đô thị với hơn 88 tiện ích, cảnh quan xanh
                        </div>
                        <img src={quangtruong2} alt="Ảnh" />
                        <div className="img-dec">
                            Quảng trường 3,5 ha với sân khấu nhạc nước hiện đại
                            và tháp ánh sáng cao 42 mét.
                        </div>
                        <img src={homatrong} alt="Ảnh" />
                        <div className="img-dec">
                            Khuôn viên Hồ Mắt Rồng 2 ha, xây dựng trên mạch nước
                            ngầm tự nhiên.
                        </div>
                        <img src={plaza} alt="Ảnh" />
                        <div className="img-dec">
                            Trung tâm thương mại sang trọng với kiến trúc Tân cổ
                            điển
                        </div>
                        <ul>
                            <li>
                                Khám phá tháp biểu tượng ánh sáng vừa xác lập kỷ
                                lục Việt Nam
                            </li>
                            <li>
                                Rực rỡ cây thông Noel khổng lồ tại Danko City
                            </li>
                            <li>
                                Danko City xuất hiện trên tạp chí bất động sản
                                Đông Nam Á
                            </li>
                            <li>
                                Danko City giành giải KĐT có thiết kế cảnh quan
                                đẹp nhất Việt Nam
                            </li>
                            <li>
                                Miễn phí thuê 3 năm mặt bằng TTTM Danko Plaza
                            </li>
                        </ul>
                        <p>
                            <span>PHƯƠNG THỨC THANH TOÁN</span>
                            <br />
                            Chính sách thanh toán linh động, 6 đợt trong 15
                            tháng, mỗi đợt cách nhau 3 tháng. Hoặc thanh toán
                            sớm 95% để nhận chiết khấu lên tới 10%.
                        </p>
                        <p>
                            <span>TIẾN ĐỘ</span>
                            <br />
                            Tính tới tháng 4/2021. Dự kiến khu đô thị đi vào
                            hoạt động từ Quý IV, 2021.
                        </p>
                    </div>
                    <NearPage leftPage={leftPage} rightPage={rightPage} />
                </div>
                <Right />
            </div>
        </div>
    );
};
export default DatNenDanko;
