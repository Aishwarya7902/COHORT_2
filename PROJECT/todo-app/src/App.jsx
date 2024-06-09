import { useState } from 'react'
import './App.css'

function App() {
  const [todos,setTodos]=useState([
    {
      title:"Go to gym",
      description:"Go to gym from 7-9",
      completed:false
    },
    {
      title:"study dev",
      description:"complete 5.2 from cohort2",
      completed:true
    }
  ]);

function addTodo(){
  setTodos([...todos,{
    title:"New todo added",
    description:"Hey ! you added a new todo"
  }])
}
  return (
   
      <div>
       <button onClick={addTodo}>Add a random button</button>
       {todos.map(function(todos){
        return <Todo title={todos.title} description={todos.description}></Todo>
       })}
       
      </div>
   
  )
}

function Todo(props){

  
   return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
   </div>
}


export default App
