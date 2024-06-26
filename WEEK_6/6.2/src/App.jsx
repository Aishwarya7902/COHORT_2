import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import axios from "axios"

function App() {
  const [id,setId]=useState(1)
  return <div>

    {/* <button onClick={<Todo id={1}></Todo>}>1</button>
    <button onClick={<Todo id={2}></Todo>}>2</button>
    <button onClick={<Todo id={3}></Todo>}>3</button>
    <button onClick={<Todo id={4}></Todo>}>4</button> */}
    <button onClick={()=>setId(1)}>1</button>
    <button onClick={()=>setId(2)}>2</button>
    <button onClick={()=>setId(3)}>3</button>
    <button onClick={()=>setId(4)}>4</button>
    <Todo id={id}></Todo>

    

  </div>
}

function Todo({id}) {
  const [todos, setTodos] = useState({});

  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todo?id=" + id)
   .then(response=>{
     setTodos(response.data.todo)
   })

  },[id])

  return <div>
    <h1>
      {todos.title}
    </h1>
    <h4>
      {todos.description}
    </h4>
  </div>
}

export default App;
