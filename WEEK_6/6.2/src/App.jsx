import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import axios from "axios"

function App() {
  const [counter,setCounter]=useState(0)
  const [inputValue,setInputValue]=useState(1);
  let count=0;
  for(let i=1;i<=inputValue;i++){
    count+=i;
  }
  return <div>

    <input onChange={function(e){
      setInputValue(e.target.value)
    }} type="text" placeholder='Find sum from 1 to n'/>
    
    <br />
    <h3>{"Sum from 1 to " + inputValue + " is  " +  count}</h3>
    <button onClick={()=>setCounter(counter+1)}>Counter {counter}</button>
    

  </div>
}



export default App;
