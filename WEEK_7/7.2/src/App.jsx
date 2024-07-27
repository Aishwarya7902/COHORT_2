
import { useContext } from "react"
import { CountContext } from "./context";
import { RecoilRoot, useRecoilState, useRecoilValue,useSetRecoilState } from "recoil";
import { countAtom } from "./store/atoms/count";


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