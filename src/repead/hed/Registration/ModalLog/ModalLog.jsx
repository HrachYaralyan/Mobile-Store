import React, { useEffect, useState } from "react";
import style from "./Modallog.module.scss";
import Swal from "sweetalert2";

export default function ModalLog({ setActiveLog }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState("* Пустое поле");
  const [passwordError, setPasswordError] = useState("* Пустое поле");
  const [formValid, setFormValid] = useState(false);


  let l_email = localStorage.getItem("Email");
  let  l_pass =  localStorage.getItem("Pass");

  function clickButton () {
    if(!formValid) {
      Swal.fire({
        position: 'top-center',
        icon: 'error',
        title: 'Вы неправильно заполнили форму',
        showConfirmButton: false,
        timer: 1500
      })
    } else {
      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Добро Пожаловать',
        showConfirmButton: false,
        timer: 1500
      })
      window.location = "/";
    }
  }

  
  useEffect(()=>{
    if(emailError || passwordError) {
      setFormValid(false)
    }else {
      setFormValid(true)
    }

  }, [emailError, passwordError])

  const emailHandler = (e) => {
    setEmail(e.target.value)
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(!re.test(String(e.target.value).toLowerCase()) || l_email !== e.target.value ) {
      setEmailError("* Некорректный Е-Мейл");
    }else {
      setEmailError("");
    }
  }

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if(e.target.value.length < 3 || e.target.value.length > 8 || l_pass !== e.target.value ) {
      setPasswordError("Пароль должен быть длинне 3 и меньше 8")
      if(!e.target.value) {
      setPasswordError("* Пароль пустой");
      }
    }else {
      setPasswordError("");
    }
  }


  const blurHandler = (e) => {
    // eslint-disable-next-line default-case
    switch(e.target.name) {
      case "email" :
        setEmailDirty(true)
        break;
      case "password" :
        setPasswordDirty(true)
        break;
    }
  }
  useEffect(() => {
    document.getElementById("root").style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    return () => {
      document.getElementById("root").style.overflow = null;
      document.body.style.overflow = null;
    };
  }, []);

  return (
    <div className={style.modal} onClick={() => setActiveLog(false)}>
      <div
        className={style.modalContent}
        style={{

          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        onClick={(e) => e.stopPropagation()}
      >
             <h5 className="text-center">Log in</h5>
        <form className={style.main}>
          {emailDirty && emailError && (
            <div style={{ color: "#f10612", fontSize: "20px", fontWeight: "600" , textAlign: "center" }}>
              {emailError}
            </div>
          )}
          <div className={style.center}>
          <input
            onChange={e => emailHandler(e)}
            name="email"
            value={email}
            onBlur={e => blurHandler(e)}
            type="email"
            placeholder="Е-Мейл"
            className={style.input}
          >
          </input>
          </div>
          {passwordDirty && passwordError && (
            <div style={{ color: "#f10612", fontSize: "20px", fontWeight: "600" , textAlign: "center"  }}>
              {passwordError}
            </div>
          )}
          <div className={style.center}>
          <input
            onChange={e => passwordHandler(e)}
            name="password"
            value={password}
            onBlur={e => blurHandler(e)}
            type="password"
            placeholder="Пароль"
            className={style.input}
          ></input>
          </div>
          <div className={style.check}>
            <input type="checkbox"></input>
            <p>Запомнить Меня</p>
          </div>
          <div className={style.mainbtn}>
            <button type="button" className={style.signinbtn} onClick={clickButton}>Вход</button>
         
          </div>
        </form>
        <p></p>
      </div>
    </div>
  );
}
