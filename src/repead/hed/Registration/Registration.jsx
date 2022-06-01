import React from "react";
import "../hed.css";
// import ModalLog from "./ModalLog/ModalLog";
// import ModalReg from "./ModalReg/ModalReg";
import { useTranslation } from 'react-i18next';

function Registration(props) {
  const { t } = useTranslation();
  return (
    <>
      <div>
        <form>
          <button type="button" className="regbtn" onClick={() => props.setActiveLog(true)}>
           {t("Log in")}
          </button>
          <button type="button" className="regbtn" onClick={() => props.setActiveReg(true)}>
            {t("Registration")}
          </button>
        </form>
      </div>
    </>
  );
}

export default Registration;
