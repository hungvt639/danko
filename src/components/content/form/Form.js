import React, { Fragment, useState } from "react";
import "./form.css";
const axios = require("axios");
const Form = ({ color, top, paddingMenu }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [validateEmail, setValidateEmail] = useState(false);
    const [validatePhone, setValidatePhone] = useState(false);
    const [checkPhone, setCheckPhone] = useState(false);
    const [ok, setOK] = useState(false);
    const [err, setErr] = useState(true);
    const formUrl =
        "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfHYr_zZLQaVEhiScucV-oww75LUAXTOHhlixZMri-8ONajiA/formResponse";
    // const cors = "https://cors-anywhere.herokuapp.com/";
    // const config = {
    //     cors: 'https://cors-anywhere.herokuapp.com/', // <optional> doesn't display the cors error
    //     formUrl: 'https://docs.google.com/forms/d/e/<GOOGLE_FORM_ID>/formResponse'
    //   };
    function fValidateEmail(email) {
        if (!email) return true;
        const re =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    function fValidatePhone(phone) {
        const re = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
        return re.test(phone);
    }

    async function submitGoogleForms() {
        const formdata = new FormData();
        formdata.append("entry.1143621888", name ? name : "");
        formdata.append("entry.1398904860", email ? email : "");
        formdata.append("entry.689601757", phone);
        await axios({
            url: `${formUrl}`,
            method: "post",
            data: formdata,
            responseType: "json",
        })
            .then(function (res) {
                setOK(true);
                setErr(false);
            })
            .catch(function (e) {
                setErr(true);
                setOK(false);
            });
    }

    function submitForm(e) {
        e.preventDefault();
        const valiEmail = fValidateEmail(email);
        const valiPhone = fValidatePhone(phone);
        setValidateEmail(!valiEmail);
        if (phone) {
            setCheckPhone(false);
            setValidatePhone(!valiPhone);
        } else {
            setCheckPhone(true);
            setValidatePhone(false);
        }
        if (valiEmail && valiPhone && phone) {
            submitGoogleForms();
        }
    }
    return (
        // <iframe
        //     src="https://docs.google.com/forms/d/e/1FAIpQLSfHYr_zZLQaVEhiScucV-oww75LUAXTOHhlixZMri-8ONajiA/viewform?embedded=true"
        //     width="640"
        //     height="673"
        //     frameborder="0"
        //     marginheight="0"
        //     marginwidth="0"
        // ></iframe>
        <form
            style={{ padding: paddingMenu, backgroundColor: color }}
            onSubmit={submitForm}
            className="form"
        >
            <input
                style={{ marginTop: top }}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Tên khách hàng"
            />
            <input
                className={validateEmail ? "input-err" : ""}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Địa chỉ Email"
            />
            {validateEmail ? <p>Địa chỉ e-mail không hợp lệ.</p> : <Fragment />}
            <input
                className={validatePhone || checkPhone ? "input-err" : ""}
                type="number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Điện thoại liên hệ"
            />
            {validatePhone ? <p>Số điện thoại không hợp lệ.</p> : <Fragment />}
            {checkPhone ? <p>Mục này là bắt buộc.</p> : <Fragment />}
            <button type="submit">ĐĂNG KÝ TƯ VẤN</button>

            {validateEmail || validatePhone || checkPhone ? (
                <div className="error-input">
                    Có một hoặc nhiều mục nhập có lỗi. Vui lòng kiểm tra và thử
                    lại.
                </div>
            ) : (
                <Fragment />
            )}
            {ok && !validateEmail && !validatePhone && !checkPhone ? (
                <div className="ok-input">
                    Xin cảm ơn, form đã được gửi thành công.
                </div>
            ) : (
                <Fragment />
            )}
            {err && !validateEmail && !validatePhone && !checkPhone ? (
                <div className="err-input">
                    Đã sảy ra lỗi, bạn vui lòng gửi lại thông tin cho chung tôi.
                    Xin cảm ơn!
                </div>
            ) : (
                <Fragment />
            )}
        </form>
    );
};
export default Form;
