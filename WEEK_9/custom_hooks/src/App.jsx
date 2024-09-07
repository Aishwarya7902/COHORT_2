import { useEffect, useState } from 'react'
import axios from 'axios'

function useMousePointer(){
 const [mousePosition,setMousePosition]=useState({x:0,y:0})
 const handleMouseMove=(e)=>{
   setMousePosition({
    x:e.clientX,
    y:e.clientY
   })
 }
 
 useEffect(()=>{
  window.addEventListener('mousemove',handleMouseMove);
  return ()=>{
    window.removeEventListener('mousemove',handleMouseMove)
  };
 },[])
 return mousePosition;
}

function App() {
  const mousePosition = useMousePointer();

  return (
    <>
      Your mouse position is {mousePosition.x},{mousePosition.y}
    </>
  )
}


export default App
