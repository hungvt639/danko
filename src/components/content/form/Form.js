import React, { Fragment, useState } from "react";
import "./form.css";

// import postData from "../../../request/repository/GoogleForms";
const axios = require("axios");
const Form = ({ color, top, paddingMenu, btn }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [checkName, setCheckName] = useState(false);
    const [validateEmail, setValidateEmail] = useState(false);
    const [validatePhone, setValidatePhone] = useState(false);
    const [checkPhone, setCheckPhone] = useState(false);
    const [ok, setOK] = useState(false);
    const [err, setErr] = useState(false);
    const formUrl =
        "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfHYr_zZLQaVEhiScucV-oww75LUAXTOHhlixZMri-8ONajiA/formResponse";
    // const cors = "https://cors-anywhere.herokuapp.com/";

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

    // async function postData(url, data) {
    //     await fetch(url, {
    //         method: "POST",
    //         mode: "no-cors",
    //         // cache: "no-cache",
    //         // credentials: "same-origin",
    //         // redirect: "follow",
    //         // referrerPolicy: "no-referrer",
    //         body: data,
    //     })
    //         .then(function (res) {
    //             console.log("ok", res);
    //             setOK(true);
    //             setErr(false);
    //         })
    //         .catch((e) => {
    //             console.log("err", e);
    //             setOK(false);
    //             setErr(true);
    //         });
    // }

    async function submitGoogleForms() {
        const formdata = new FormData();
        formdata.append("entry.518681509", name);
        formdata.append("entry.1796644577", email ? email : "");
        formdata.append("entry.1677124973", phone);
        // postData(formUrl, formdata);

        await axios({
            url: `${formUrl}`,
            data: formdata,
            method: "POST",
        })
            .then(function () {
                setOK(true);
                setErr(false);
            })
            .catch(() => {
                setOK(true);
                setErr(false);
            });

        // const headers = {
        //     "Content-Type": "multipart/form-data",
        //     "Access-Control-Allow-Origin": "*",
        //     "Access-Control-Allow-Headers": "X-Requested-With",
        // };

        // await axios
        //     .post(formUrl, formdata, { headers })
        //     .then((response) => {
        //         console.log("Success ========>", response);
        //     })
        //     .catch((error) => {
        //         console.log("Error ========>", error);
        //     });

        // try {
        //     console.log("sad");
        //     await postData(formdata);
        //     console.log("ok");
        // } catch (e) {
        //     console.log(e);
        // }
    }
    function submitForm(e) {
        e.preventDefault();
        const valiEmail = fValidateEmail(email);
        const valiPhone = fValidatePhone(phone);
        setCheckName(!name);
        setValidateEmail(!valiEmail);
        if (phone) {
            setCheckPhone(false);
            setValidatePhone(!valiPhone);
        } else {
            setCheckPhone(true);
            setValidatePhone(false);
        }
        if (valiEmail && valiPhone && phone && checkName) {
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
                placeholder="T??n kh??ch h??ng"
            />
            {checkName ? <p>M???c n??y l?? b???t bu???c.</p> : <Fragment />}
            <input
                className={validateEmail ? "input-err" : ""}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="?????a ch??? Email"
            />
            {validateEmail ? <p>?????a ch??? e-mail kh??ng h???p l???.</p> : <Fragment />}
            <input
                className={validatePhone || checkPhone ? "input-err" : ""}
                type="number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="??i???n tho???i li??n h???"
            />
            {validatePhone ? <p>S??? ??i???n tho???i kh??ng h???p l???.</p> : <Fragment />}
            {checkPhone ? <p>M???c n??y l?? b???t bu???c.</p> : <Fragment />}
            <div className="btn-form-submit">
                <button style={{ width: btn ? "unset" : "" }} type="submit">
                    ????NG K?? T?? V???N
                </button>
            </div>

            {validateEmail || validatePhone || checkPhone || checkName ? (
                <div className="error-input">
                    C?? m???t ho???c nhi???u m???c nh???p c?? l???i. Vui l??ng ki???m tra v?? th???
                    l???i.
                </div>
            ) : (
                <Fragment />
            )}
            {ok && !validateEmail && !validatePhone && !checkPhone ? (
                <div className="ok-input">
                    Xin c???m ??n, form ???? ???????c g???i th??nh c??ng.
                </div>
            ) : (
                <Fragment />
            )}
            {err &&
            !validateEmail &&
            !validatePhone &&
            !checkPhone &&
            checkName ? (
                <div className="err-input">
                    ???? s???y ra l???i, b???n vui l??ng g???i l???i th??ng tin cho chung t??i.
                    Xin c???m ??n!
                </div>
            ) : (
                <Fragment />
            )}
        </form>
    );
};
export default Form;
