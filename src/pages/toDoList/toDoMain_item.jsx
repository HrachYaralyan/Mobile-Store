import "./toDoMain_item.scss"

function MainItem({ todo, onChange, onDelete }) {
  return (
    <div>
      <label>
        <div className="toDoMainItem">
        <input type="checkbox" checked={todo.isComplited} onChange={(e) => {
          onChange({
            ...todo,
            isComplited: e.target.checked
          });
        }} />
       <p>{todo.text}</p> 
        <button onClick={() => {
          onDelete(todo);
        }} className="btn btn-danger todobtn">X</button>
        </div>
      </label>
    </div>
  )
}

export default MainItem;