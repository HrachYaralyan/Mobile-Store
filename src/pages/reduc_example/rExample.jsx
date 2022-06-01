import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

import lang from "../../json/language.json"

export default function ReducExample() {

  const name = useSelector(function (state) {
    return (state.currentUser.name)
  });

  const dispatch = useDispatch();

  const age = useSelector(function(state){
    return(state.currentUserAge.age)
  });

  const [lan , setLan] = useState(0)

  function clickEn() {
    setLan(0)
  }

  function clickRu() {
    setLan(1)
  }

  function clickArm() {
    setLan(2)
  }


  return(
    <>
     <div>
        <h1>{name} </h1>

        <input type="text"
          value={name}
          onChange={(e) => {
            dispatch({
              type: "editName",
              payload:{
                name:e.target.value
              } 
            })
           
          }}
        />

        <h2>{age}</h2>
        <input type="text" 
          value={age}
          onChange={(e)=>{
            dispatch({
              type:"editAge",
              payload:{
                age:e.target.value
          
              }
            })
          }}
          />
      </div>
          
      <p>{lang[lan].map((item)=> item.name)}</p>
      <button onClick={clickEn}>En</button>
      <button onClick={clickRu}>RU</button>
      <button onClick={clickArm}>Arm</button>

      {console.log(lang[lan].map((item)=> item.name))}

    
    </>

  )
  
}