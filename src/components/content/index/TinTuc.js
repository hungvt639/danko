import React, { Fragment } from "react";
import { HashLink as Link } from "react-router-hash-link";
const TinTuc = ({ lists, cssText1, cssText2, showDate }) => {
    return (
        <div className="width-100 flex-row">
            {lists.map((t, i) => {
                return (
                    <div
                        key={i}
                        className="padding-15 width-33 position-relative"
                    >
                        <Link
                            // onClick={() => setShowForm(true)}
                            className="link"
                            to={t.url}
                        >
                            {showDate ? (
                                <div className="show-date">
                                    <span>{t.text2.substring(0, 2)}</span>
                                </div>
                            ) : (
                                <Fragment />
                            )}

                            <div className="image-cover">
                                <img
                                    className="width-100"
                                    src={t.img}
                                    alt={t.text1}
                                />
                            </div>
                            <div className="box-text3">
                                <p className={cssText1}>{t.text1}</p>
                                <p className={cssText2}>{t.text2}</p>
                            </div>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};
export default TinTuc;
