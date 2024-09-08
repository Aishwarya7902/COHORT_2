import { useEffect, useState } from 'react'
import axios from 'axios'

function useDebounce(value,time){
  const [debouncedValue,setDebounceValue]=useState(value);
   useEffect(()=>{
    let timeOutNumber=setTimeout(()=>{
         setDebounceValue(value)
    },time);

    return ()=>{
      clearTimeout(timeOutNumber);
    }
   },[value])

   return debouncedValue
}

function App() {
  
const [value,setValue]=useState(0);
const debouncedValue=useDebounce(value,500);
  return (
    <>
      Debounced Value is {debouncedValue}
      <input type="text" placeholder='Enter value' 
      onChange={(e)=>{
        setValue(e.target.value);
      }}/>
    </>
  )
}


export default App
