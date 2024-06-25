import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import axios from "axios"

function App() {
  return <div>
    <Todo id={1}></Todo>

  </div>
}

function Todo({id}) {
  const [todos, setTodos] = useState({});

  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todo?id=" + id)
   .then(response=>{
     setTodos(response.data.todo)
   })

  }, [])

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
