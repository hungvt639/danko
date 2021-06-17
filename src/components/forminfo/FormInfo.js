import React from "react";
import Form from "../content/form/Form";
import "./forminfo.css";
const FormInfo = ({ showForm, setShowForm }) => {
    function close() {
        setShowForm(false);
    }
    return (
        <div className={showForm ? "show-form" : "show-form height-0"}>
            <div
                onClick={close}
                className={showForm ? "close-form" : "display-none"}
            ></div>
            <div className="form-info">
                <div className="flex-d-row head-info">
                    <h1>NHẬN BẢNG GIÁ VÀ CHÍNH SÁCH MỚI NHẤT</h1>
                    <div onClick={close}>
                        <p>X</p>
                    </div>
                </div>
                <p className="p-info">
                    Quý khách điền thông tin bên dưới chúng tôi sẽ liên hệ sớm
                    nhất
                </p>
                <div className="form-info-f">
                    <Form btn={true} />
                </div>
                <div className="footer"></div>
            </div>
        </div>
    );
};
export default FormInfo;
