import React, { useState } from "react";
import './hed.css';
import menu from "../../json/menu.json"
import { Link } from "react-router-dom";

import arm from "./img/armenia.png";
import ru from "./img/russia.png";
import eng from "./img/united-states.png";

import { useTranslation } from "react-i18next";

import i18n from "i18next";
import Registration from "./Registration/Registration";



export default function Hed(props) {
    const { t } = useTranslation();

    const onChange = (event) => {
        i18n.changeLanguage(event.target.value);
    };
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">My Shop</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {menu[props.lan].map((item) => {
                        return (
                            <>
                                <div className="collapse navbar-collapse myclass" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <Link className="nav-link active" aria-current="page" to="/">{t("menu1")}</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link active" to="/phone">{t("menu2")}</Link>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                {t("menu3")}
                                            </a>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <li><Link className="dropdown-item active" to="/ToDoStart">{t("menu4")}</Link></li>
                                                <li><Link className="dropdown-item active" to="/rExample">{t("menu5")}</Link></li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li><Link className="dropdown-item active" to="/translate">{t("menu6")}</Link></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link active myclass" to="/akardion">{t("menu7")}</Link>
                                        </li>
                                    </ul>
                                    <div className="langClass">
                                        {/* <div onClick={props.clickEn}><img src={eng} alt="" /></div>
                                    <div onClick={props.clickArm}><img  src={ru} alt="" /></div>
                                    <div onClick={props.clickRu}><img src={arm} alt="" /></div> */}
                                        <div >
                                            <select name="language" onChange={onChange}>
                                                <option value="en">{t("L1")}</option>
                                                <option value="ru">{t("L2")}</option>
                                                <option value="am">{t("L3")}</option>
                                            </select>
                                        </div>
                                    </div>
                                    <form className="d-flex myclassname">
                                        <div>
                                        <p id="shop" style={{padding:"10px"}}><Link to="/shop"><i className="fas fa-shopping-cart"></i></Link></p>
                                        </div>
                                        <div>
                                        <Registration  setActiveLog={props.setActiveLog} setActiveReg={props.setActiveReg}/>
                                        </div>
                                    </form>
                                </div>
                            </>
                        )
                    })}

                </div>
            </nav>
        </>
    )
}

// npm install i18next i18next-browser-languagedetector i18next-http-backend 