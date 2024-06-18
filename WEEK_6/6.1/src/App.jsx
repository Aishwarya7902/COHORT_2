import { useState } from 'react'


function App() {



  return (

    <div>
      <HeaderWithButton></HeaderWithButton>
      <Header title="My name is Kirat"></Header>
      <Header title="My name is Kirat"></Header>
      <Header title="My name is Kirat"></Header>
      <Header title="My name is Aditya"></Header>

    </div>

  )
}

function HeaderWithButton() {
  const [firstTitle, setFirstTitle] = useState("My name is Aishwarya");
  function changeTitle() {
    setFirstTitle("My name is " + Math.random());
  }
  return (
    <div>
      <button onClick={changeTitle}>Click me to change title</button>
      <Header title={firstTitle}></Header>
    </div>
  )
}

function Header(props) {
  return <div>
    {props.title}
  </div>
}


export default App

