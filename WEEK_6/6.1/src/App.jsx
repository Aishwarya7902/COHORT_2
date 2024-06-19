import { useState } from 'react'
import React from 'react';


function App() {

 const [todos,setTodods]=useState([
  {
    id:1,
    tile:"go to gym ",
    description:"go to gym from 7-9"
  },
  {
    id:2,
    tile:"go to park ",
    description:"go to park from 9-10"
  },
  {
    id:3,
    tile:"study",
    description:"study from 10-2"
  }
 ])

function addTodo(){
  setTodods([...todos,{
    id:4,
    title:Math.random(),
    description:Math.random()
  }])
}
  return (

    <div>
       <button onClick={addTodo}>Add a todo</button>
      {todos.map(function (todo){
        return <Todo title={todo.title} description={todo.description}/>
      })}
    </div>

  )
}

function Todo({title,description}){
 return <div>
   <h1>{title}</h1>
   <h5>{description}</h5>
 </div>
}

export default App

