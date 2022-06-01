import React, { useState } from "react";
import s from "./phone.module.scss";


import Count from "./count";

export default function Phone({ global , setGlobal}) {

  // fetch('https://mocki.io/v1/04de8b31-e75a-4e8c-a182-3e8f1ee36a93')
  // .then(response => response.json())
  // .then(commits => console.log(commits[0].procent));

  return (

    <div className={s.homeDiv}>
    <h1 className="text-center">Top Models + 5 % </h1>  
    <div className="products-box mt-5">
    <div className="container">
    <div className="row special-list">
    {global.map((item)=>{
      return(
        <>
            <div className="col-lg-3 col-md-6 special-grid best-seller mt-5" key={item.id + 11}>
                <div className="products-single fix">
                  <div className={`box-img-hover" ${s.pdiv} `}>
                    <div className="type-lb">
                      <p className="sale">Top </p>
                    </div>
                    <img src={item.picurl} className="img-fluid" alt="Image" />
                    <div className="mask-icon">
                      <ul>
                        <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt"></i></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart"></i></a></li>
                      </ul>
                      
            
                    </div>
                  </div>
                 
                </div>
                <a className="cart"  href="#">   <Count item={item} global={global} setGlobal={setGlobal} /></a>
                <div className="why-text">
                    <h4>{item.model}</h4>
                    <h5> {item.price} $</h5>
                  </div>
              </div>
              
        </>
      )
    })}
    </div>
    </div>
    </div>
  </div>

  )
}