
import { useContext } from "react"
import { CountContext } from "./context";
import { RecoilRoot, selector, useRecoilState, useRecoilValue,useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";


function App() {


  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>

    </div>
  )
}

function Count() {
  return <div>
    <CountRenderer />
    <Buttons />
  </div>
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return <div>
    {count}
    <EvenCountRenderer/>
  </div>
}

function EvenCountRenderer(){
  const isEven=useRecoilValue(evenSelector);
  return <div>
     {isEven ? "It is Even" : null}
  </div>
}


function Buttons() {
  const setCount = useSetRecoilState(countAtom);
  console.log("buttons re-rendered")
  return <div>
    <button onClick={() => {
      setCount(count=>count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count=>count - 1)
    }}>Decrease</button>
  </div>
}

export default App