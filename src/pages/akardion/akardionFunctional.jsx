import React from "react";
import s from "./akardion.module.scss";
import { BiArrowFromRight } from "react-icons/bi";
import { BiArrowFromTop } from "react-icons/bi";
import { useState } from "react";

import { useTranslation } from 'react-i18next';

export default function ClickAkardion({ elem }) {
  const [flag, setflag] = useState(true);
  const { t } = useTranslation();

  const Clk = () => {
    setflag(!flag);
  };

  return (
    
    <>
      <div className={s.big}>

        {flag ? (
          <div className={s.big}>

            <div className={s.itemDiv}>{ t(elem.text.substring(0, 40) + ' . . .')}</div> 
            <div onClick={Clk} className={s.icon}><BiArrowFromRight/></div>
          </div>

        ) : (
          <div className={s.big}>
   

              <div className={s.itemDiv}>{t(elem.text)}</div> 
              <div onClick={Clk} className={s.icon}><BiArrowFromTop/></div>
          </div>
        )}




      </div>
    </>
  )
}