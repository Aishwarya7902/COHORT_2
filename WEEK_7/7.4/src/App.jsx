
import './App.css'
import { RecoilRoot, useRecoilValue,useRecoilState } from 'recoil'
import { todosAtomFamily} from './atoms'
import axios from 'axios'

function App() {
  return <RecoilRoot>
    <Todo id={1}/>
    <Todo id={3}/>
  </RecoilRoot>
}

function Todo({id}) {
  const [todo,setTodo]=useRecoilState(todosAtomFamily(id))
  return (
    <>
     {todo.title}
     {todo.description}
     <br/>
    </>
  )
}


export default App
