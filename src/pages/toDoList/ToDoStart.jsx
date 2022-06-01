import React from "react";
import { useState } from "react";
import ToDoFooter from "./toDoFooter";
import InputArea from "./toDoHeader";
import ToDoMain from "./toDoMain";

import "./ToDoStart.css";

export default function ToDoList() {

  const [todos, settodos] = useState([
    {
      id: Math.random(),
      text: "Learn Js",
      isComplited: false
    },
    {
      id: Math.random(),
      text: "Learn React",
      isComplited: false
    },
    {
      id: Math.random(),
      text: "Watch It-Kamasutra hu hu hu",
      isComplited: false
    },

  ]);

  return (
    <>
    <div className="toDoBody">
      <h1 className="text-center text-danger">Plannig your day and be happy </h1>
    <div className="toDoBig">
      <InputArea onAdd={(text) => {
        settodos([
          ...todos,
          {
            id: Math.random(),
            text: text,
            isComplited: false
          }
        ]);
      }} />
      <ToDoMain
        todos={todos}
        onDelete={(todo) =>{
          settodos(todos.filter((t)=> t.id !== todo.id))
        }}
        onChange={(newTodo) => {
          settodos(todos.map((todo) =>{
            if(todo.id === newTodo.id) {
              return newTodo;
            }
            return todo;
          }));
        } }
      />
      <ToDoFooter todos={todos} clearCompited={() => {
        settodos(todos.filter((todo) => !todo.isComplited));
      }} />
      </div>
      </div>
    </>
  )
}