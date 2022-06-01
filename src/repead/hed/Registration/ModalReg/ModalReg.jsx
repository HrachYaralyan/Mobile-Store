// import {  } from "@testing-library/user-event/dist/utils";
import { React, useEffect, useState } from "react";
import style from "./ModalReg.module.scss";
import Swal from "sweetalert2";

import { useTranslation } from 'react-i18next';

export default function ModalReg({activeReg, setActiveReg }) {
  
  const { t } = useTranslation();

  let nameepmty= t("* Имя пустой");
  let lastNameepmty= t("* Фамилия пустой");
  let emailepmty= t("* Емейл пустой");
  let passwordepmty= t("* Пароль пустой");


  let nameepmtyDirty= t("* Некорректная имя");
  let lastNameepmtyDirty= t("* Некорректная фамилия");
  let emailepmtyDirty= t("* Некорректный Е-Мейл");
  let passwordepmtyDirty= t("* Пароль пустой");
  let passwordepmtyDirty38= t("* Пароль должен быть длинне 3 и меньше 8");


  let nameepmtyPL= t("Имя");
  let lastNameepmtyPL= t("Фамилия");
  let emailepmtyPL= t("Емейл");
  let passwordepmtyPL= t("Пароль");




  let success =t("Success");
  let error =t("Error");

  const [firstName, setFirstname] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstNameDirty, setFirstnameDirty] = useState(false);
  const [lastNameDirty, setLastNameDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [firstNameError, setFirstnameError] = useState(nameepmty);
  const [lastNameError, setLastNameError] = useState(lastNameepmty);
  const [emailError, setEmailError] = useState(emailepmty);
  const [passwordError, setPasswordError] = useState(passwordepmty);
  const [formValid, setFormValid] = useState(false);



  useEffect(()=>{
    if(firstNameError || lastNameError || emailError || passwordError) {
      setFormValid(false)
    }else {
      setFormValid(true)
    }

  }, [firstNameError, lastNameError, emailError, passwordError])

  function clickButton () {
    if(!formValid) {
      Swal.fire({
        position: 'top-center',
        icon: 'error',
        title: error,
        showConfirmButton: false,
        timer: 1500
      })
    } else {
      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: success,
        showConfirmButton: false,
        timer: 1500
      })
      window.location = "/";
    }
  }

  const firstNameHandler = (e) => {
    setFirstname(e.target.value)
    const firstName = /^[A-Za-z\s]+$/;
    if(!firstName.test(e.target.value)) {
      setFirstnameError(nameepmtyDirty);
    }else {
      localStorage.setItem('Name', e.target.value);
      setFirstnameError("");
    }
  }

  const lastNameHandler = (e) => {
    setLastName(e.target.value)
    const lastName = /^[A-Za-z\s]+$/;
    if(!lastName.test(e.target.value)) {
      setLastNameError(lastNameepmtyDirty);
    }else {
      localStorage.setItem('LastName', e.target.value);
      setLastNameError("");
    }
  }

  const emailHandler = (e) => {
    setEmail(e.target.value)
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(!re.test(String(e.target.value).toLowerCase())) {
      setEmailError(emailepmtyDirty);
    }else {
      localStorage.setItem('Email', e.target.value);
      setEmailError("");
    }
  }

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if(e.target.value.length < 3 || e.target.value.length > 8) {
      setPasswordError(passwordepmtyDirty38)
      if(!e.target.value) {
      setPasswordError(passwordepmtyDirty);
      }
    }else {
      localStorage.setItem('Pass', e.target.value);
      setPasswordError("");
    }
  }

  const blurHandler = (e) => {
  
    switch (e.target.name) {
      case "firstName":
        setFirstnameDirty(true);
        break;
      case "lastName":
        setLastNameDirty(true);
        break;
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
    }
  };

  useEffect(() => {
    document.getElementById("root").style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    return () => {
      document.getElementById("root").style.overflow = null;
      document.body.style.overflow = null;
    };
  }, []);

  return (
    <div className={style.modal} onClick={() => setActiveReg(false)}>
      <div
        className={style.modalContent}
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h5 className="text-center">{t("We will save your info in the best storage in the world")}</h5>
        <form className={style.main}>
          {firstNameDirty && firstNameError && (
            <div style={{ color: "#f10612", fontSize: "20px", fontWeight: "600" }}>
              {firstNameError}
            </div>
          )}
          <div>
          <input
            onChange={e => firstNameHandler(e)}
            value={firstName}
            onBlur={(e) => blurHandler(e)}
            name="firstName"
            type="text"
            className={style.input}
            placeholder={nameepmtyPL}
          ></input>
          </div>
          {lastNameDirty && lastNameError && (
            <div style={{ color: "#f10612", fontSize: "20px", fontWeight: "600" }}>
              {lastNameError}
            </div>
          )}
          <div>
          <input
            onChange={e => lastNameHandler(e)}
            value={lastName}
            onBlur={(e) => blurHandler(e)}
            name="lastName"
            type="text"
            className={style.input}
            placeholder={lastNameepmtyPL}
          ></input>
          </div>
          {emailDirty && emailError && (
            <div style={{ color: "#f10612", fontSize: "20px", fontWeight: "600" }}>
              {emailError}
            </div>
          )}
          <div>
          <input
            onChange={(e) => emailHandler(e)}
            value={email}
            onBlur={(e) => blurHandler(e)}
            name="email"
            type="email"
            className={style.input}
            placeholder={emailepmtyPL}
          ></input>
          </div>
          {passwordDirty && passwordError && (
            <div style={{ color: "#f10612", fontSize: "20px", fontWeight: "600" }}>
              {passwordError}
            </div>
          )}
          <div>
          <input
            onChange={e => passwordHandler(e)}
            value={password}
            onBlur={(e) => blurHandler(e)}
            name="password"
            type="password"
            className={style.input}
            placeholder={passwordepmtyPL}
          ></input>
          </div>
          <div className={style.mainbtn}>
            <button className={style.submitbtn} type="button" onClick={clickButton}>
             {t("Registration")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
