import { useReducer, React, useState, createRef } from "react";
import BascetCount from "./basket_pluse_min";
import s from './shop.module.scss';
import './basketButton.css'



export default function Shop({ filterShop, setGlobal, global, filterShop2,homeJ,sethomeJ }) {

  const removeShopItem = (item) => {
    item.itemcount = 0;
    setGlobal([...global])

  }


  

  return (
    <>
    
      <h1 className="datart text-center mt-5 mb-5"> Basket Top models + 5% Cashback</h1>
      <div className={s.homeDiv}>
    
        <div className="products-box mt-5">
        <div className="container">
        <div className="row special-list">
        {filterShop.map((item)=>{
          return(
            <>
                <div className="col-lg-3 col-md-6 special-grid best-seller" key={item.id + 11}>
                    <div className="products-single fix">
                      <div className={`box-img-hover ${s.pdiv}`}>
                        <div className="type-lb">
                          <p className="sale"> + 5 % Cashback</p>
                        </div>
                        <img src={item.picurl} className="img-fluid" alt="Image" />
                        <div className="mask-icon">
                          <ul>
                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></a></li>
                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt"></i></a></li>
                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart"></i></a></li>
                          </ul>
                          {/* <a className="cart"  href="#"></a> */}
                
                        </div>
                      </div>
                      <div className="why-text">
                        <h4>{item.model}</h4>
                        <h5> {item.price} $</h5>
                        <div className="mycenter">
                        <button className="btn btn-primary" onClick={() => removeShopItem(item)}>Remove from basket</button>
                        </div>
                        <BascetCount filterShop2={filterShop2} item={item} />
                      </div>
                    </div>
                  </div>
            </>
          )
        })}
        </div>
        </div>
        </div>
      </div>
      {/* <BascetCount filterShop={filterShop} item={item} /> */}

      <div className={s.homeDiv}>
        <h1 className="text-center"> Basket </h1>  
        <div className="products-box mt-5">
        <div className="container">
        <div className="row special-list">
        {filterShop2.map((item)=>{
          return(
            <>
                <div className="col-lg-3 col-md-6 special-grid best-seller" key={item.id + 11}>
                    <div className="products-single fix">
                      <div className="box-img-hover">
                        <div className="type-lb">
                          <p className="sale">New</p>
                        </div>
                        <img src={item.picurl} className="img-fluid" alt="Image" />
                        <div className="mask-icon">
                          <ul>
                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></a></li>
                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt"></i></a></li>
                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart"></i></a></li>
                          </ul>
                          {/* <a className="cart"  href="#"></a> */}
                
                        </div>
                      </div>
                      <div className="why-text">
                        <h4>{item.model}</h4>
                        <h5> {item.price} $</h5>
                        <div className="mycenter">
                        <button className="btn btn-primary" onClick={() => removeShopItem(item)}>Remove from basket</button>
                        </div>
                        <BascetCount filterShop2={filterShop2} item={item} />
                      </div>
                    </div>
                  </div>
            </>
          )
        })}
        </div>
        </div>
        </div>
      </div>

    </>
  )
}




