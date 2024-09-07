import { useEffect, useState } from 'react'
import axios from 'axios'

function useIsOnline(){
  const [isOnline,setIsOnline]=useState(window.navigator.onLine);

  useEffect(()=>{
    window.addEventListener('online',()=>setIsOnline(true));
    window.addEventListener('offline',()=>setIsOnline(false));
  },[]);

  return isOnline;
}

function App() {
  const isOnline = useIsOnline();

  return (
    <>
      {isOnline ? "Yay you are online" : "You are offline"}
    </>
  )
}


export default App
