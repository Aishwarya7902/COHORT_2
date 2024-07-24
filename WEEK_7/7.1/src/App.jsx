import { useState } from "react"
import { CountContext } from "./context";



function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CountContext.provider value={count}>
        <Count count={count} setCount={setCount}/>
      </CountContext.provider>

      
      
    </div>
  )
}

function Count({ setCount }) {
  return <div>
   <CountRenderer />
   <Buttons setCount={setCount} />
  </div>
}

function CountRenderer(){
  const count=1;
  return <div>
    {count}
  </div>
}

function Buttons({setCount}) {
  const count=1;
  return <div>
    <button onClick={() => {
      setCount(count+1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count-1)
    }}>Decrease</button>
  </div>
}
export default App
