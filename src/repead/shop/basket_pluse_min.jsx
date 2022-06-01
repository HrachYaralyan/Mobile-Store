import { React, useState, createRef } from "react";
import './basketButton.css'


export default function BascetCount({item }) {
  let pl = createRef();
  let mn = createRef();

  const [quanity, setquanity] = useState(1)

  const  procentCount =  item.price - item.price * item.procent / 100;

  let [totalitem ,setTotalItem] = useState(procentCount)



  function pluse() {
      setquanity(quanity + 1)
      setTotalItem(procentCount * (quanity + 1))
    if (quanity > 1 ) {
      mn.current.classList.remove("disabled");
    } 
  }

  function min() {
    setquanity(quanity - 1)
    setTotalItem(procentCount * (quanity - 1))
    if (quanity === 1 ) {
      mn.current.classList.add("disabled");
    } 
  }

  return (
    <>
 
  
           {/* {quanity >= 5 ? <li>your have a bonus price {item.price * 25 / 100 }</li> :  <li>your have a bonus price {item.price - item.price * item.procent / 100   }</li>} */}
      <div className="mycenter">

        <button className="btn btn-danger " onClick={min} ref={mn}> - </button> <span> {quanity} </span> <button className="btn btn-danger" onClick={pluse} ref={pl}> + </button>
      </div>
    <p className="changePrice">{procentCount} sale in data</p>

    <p className="cashback"> {totalitem} total</p>
    </>
  )

}
