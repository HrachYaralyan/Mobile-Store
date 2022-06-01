import React from "react";
import translate from "../../json/translate.json";
import './translate.css'
export default function Translate(props) {

  return (
    <>
      <p className="transP">
        {translate[props.lan].map((item)=>{
          return(
            <>
            {item.text}123
            </>
          )
        })}
      </p>
    </>
  )

}