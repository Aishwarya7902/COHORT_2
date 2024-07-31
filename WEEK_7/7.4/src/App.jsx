
import './App.css'
import { RecoilRoot, useRecoilValue, useRecoilState, useRecoilStateLoadable } from 'recoil'
import { todosAtomFamily } from './atoms'
import axios from 'axios'

function App() {
  return <RecoilRoot>
    <Todo id={1} />
    <Todo id={3} />
  </RecoilRoot>
}

function Todo({ id }) {
  const [todo, setTodo] = useRecoilStateLoadable(todosAtomFamily(id));
  //u can also use useRecoilValueLoadable
  if (todo.state === 'loading') {
    return <div>
      loading.....
    </div>
  }
  else if (todo.state === 'hasValue') {
    return (
      <>
        {todo.contents.title}
        {todo.contents.description}
        <br />
      </>
    )
  }

  else if (todo.state === 'hasError') {
    return <div>
      Error while getting data from backend
    </div>
  }

}


export default App
