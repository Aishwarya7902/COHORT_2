import { useState } from 'react'


function App() {
const [title,setTitle]=useState("My name is Aishwarya");

function updateTitle(){
 setTitle("My name is " + Math.random());
}

  return (
    
      <div>
        <button onClick={updateTitle}>Click me to change title</button>
        <Header title={title}></Header>
        <Header title="My name is Aditya"></Header>
      </div>
    
  )
}


function Header(props){
  return <div>
    {props.title}
  </div>
}


export default App

