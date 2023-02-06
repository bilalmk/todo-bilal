'use client';
import React from "react";
import { useState } from "react";


type TodoType={name:string,isDone:boolean}

export default function Home() {

  const [todo,setTodo] = useState("");
  const [todos,setTodos] = useState([
    {name:"Todo 1",isDone:false,},
    {name:"Todo 2",isDone:false,},
    {name:"Todo 3",isDone:false,},
    {name:"Todo 4",isDone:false,},
    {name:"Todo 5",isDone:false,},
  ]);


  const handleUpdate=(x:TodoType)=>
  {
    const newTodos = todos.map((y,i)=>{
      if(y.name==x.name)
      {
        y.isDone = !y.isDone
      }
      return y;
    });
    setTodos(newTodos);
    
  }

  const handleAddTodo=()=>{
    todos.push({name:todo,isDone:false});
    setTodos(todos);
    setTodo("");
  }

  const handleDeleteTodo=(todo:string)=>
  {
    const newTodos = todos.filter(x=>{
      return todo!=x.name
    });

    setTodos(newTodos);
  }

  return (
    <>
    <div>Awsome Todo App</div>
    <input value={todo} onChange={(e)=>{setTodo(e.target.value)}}/>
    <button onClick={handleAddTodo}>Add Todo</button>
    <ul>
      {
        todos.map((x)=>{
          return(
            <li key={x.name}>
              <input type="checkbox" checked={x.isDone} onChange={(e)=>handleUpdate(x)}></input>
              {x.name}
              <button onClick={()=>handleDeleteTodo(x.name)}>Delete</button>
            </li>
          )
      })}
    </ul>
    </>
   );
}
