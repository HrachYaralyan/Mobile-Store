import "./toDoFooter.scss";

function ToDoFooter({todos ,clearCompited}) {

 const complitedSize = todos.filter((todo)=> todo.isComplited).length

  return(
  <div className="toDoFooter">
    <p>{complitedSize}/{todos.length} Complited</p> 
    <button className="btn btn-danger todobtn" onClick={clearCompited}>Clear Comolited</button>
  </div>
  )
}

export default ToDoFooter;