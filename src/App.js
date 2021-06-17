import React, { useState } from "react";
import "./App.css";
import Home from "./components/content/index/Home";
import News from "./components/content/news/News";
import DankoVinhDanh from "./components/content/news/DankoVinhDanh";
import DatNenDanko from "./components/content/news/DatNenDanko";
import DatNenVinhYen from "./components/content/news/DatNenVinhYen";
import TienDoDuAn from "./components/content/news/TienDoDuAn";
import {
    Route,
    HashRouter as Router,
    Switch,
    Redirect,
} from "react-router-dom";
// import { Drawer } from "antd";
// import Header from "./components/header/Header";
// const Home = React.lazy(() => import("./components/content/index/Home"));
// const News = React.lazy(() => import("./components/content/news/News"));
// const DankoVinhDanh = React.lazy(() =>
//     import("./components/content/news/DankoVinhDanh")
// );
// const DatNenDanko = React.lazy(() =>
//     import("./components/content/news/DatNenDanko")
// );
// const DatNenVinhYen = React.lazy(() =>
//     import("./components/content/news/DatNenVinhYen")
// );
// const TienDoDuAn = React.lazy(() =>
//     import("./components/content/news/TienDoDuAn")
// );
import Menus from "./components/content/index/header/Menus";
// import FormInfo from "./components/forminfo/FormInfo";
function App() {
    const [show, setShow] = useState(false);
    const [hash, setHash] = useState(window.location.hash);
    // const [showForm, setShowForm] = useState(false);
    return (
        <div className="App">
            <Router basename="/">
                {/* <FormInfo showForm={showForm} setShowForm={setShowForm} /> */}
                <Menus
                    show={show}
                    setShow={setShow}
                    hash={hash}
                    // setHash={setHash}
                />
                <div className={show ? "width-100 none-scroll" : "width-100"}>
                    <Switch>
                        <Route
                            exact
                            path="/tin-tuc"
                            component={() => (
                                <News
                                    setHash={setHash}
                                    // setShowForm={setShowForm}
                                />
                            )}
                        />
                        <Route
                            exact
                            path="/tien-do-du-an-danko-city-ngay-19-5-2021"
                            component={() => (
                                <TienDoDuAn
                                    setHash={setHash}
                                    // setShowForm={setShowForm}
                                />
                            )}
                        />
                        <Route
                            exact
                            path="/dat-nen-danko-city-xuat-ngoai-giao-chiet-khau-toi-12-ty"
                            component={() => (
                                <DatNenDanko
                                    setHash={setHash}
                                    // setShowForm={setShowForm}
                                />
                            )}
                        />
                        <Route
                            exact
                            path="/danko-city-duoc-vinh-danh-top-10-du-an-do-thi-va-nha-o-tiem-nang-nhat-2021"
                            component={() => (
                                <DankoVinhDanh
                                    setHash={setHash}
                                    // setShowForm={setShowForm}
                                />
                            )}
                        />
                        <Route
                            exact
                            path="/dat-nen-vinh-yen-vinh-phuc"
                            component={() => (
                                <DatNenVinhYen
                                    setHash={setHash}
                                    // setShowForm={setShowForm}
                                />
                            )}
                        />
                        <Route
                            exact
                            path="/"
                            component={() => (
                                <Home
                                    setHash={setHash}
                                    // setShowForm={setShowForm}
                                />
                            )}
                        />
                        <Redirect to="/" />
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
