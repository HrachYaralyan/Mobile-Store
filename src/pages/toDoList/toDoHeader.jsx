import { useState } from "react";
import './toDoHeader.scss'


function InputArea({onAdd}) {
  const [text ,settex] = useState("");


  return(
   <form onSubmit={(e)=>{
     e.preventDefault();
     onAdd(text);
     settex("")
   }} className="todoform" >
      <input type="text" value={text} onChange={(e)=> {
        settex(e.target.value)
        }} />
      <button className="btn btn-danger todobtn ">Add</button>
    </form>
  )
}

export default InputArea;