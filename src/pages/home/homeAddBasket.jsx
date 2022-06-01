import React, { useState } from "react";
import Swal from "sweetalert2";
export default function HomeAddToBascet({item , homeJ , sethomeJ}) {
  const [count , setcount] = useState(item.itemcount);



  function TouchMe(elem) {
    Swal.fire({
      position: 'top-center',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
    const newcount = count + 5;

    setcount(newcount );
    item.itemcount = newcount;
    sethomeJ([...homeJ]);

    elem.target.classList.add("disabled");
    
  }
  return(
    <>
<button className="btn" type="submit" onClick={TouchMe}> Add to basket </button>


  
    </>
  )
}