import React from "react"
import MainItem from "./toDoMain_item"

function ToDoMain({ todos,onChange , onDelete }) {



  return (
    <div>
      {
        todos.map((todo ) => {
          return (

          <MainItem 
            key={todo.id} 
            todo={todo}
            onChange={onChange}
            onDelete={onDelete}
            />

          )
        })
      }
    </div>

  )

}

export default ToDoMain