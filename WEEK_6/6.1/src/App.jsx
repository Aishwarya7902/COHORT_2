import { useState } from 'react'
import React from 'react';


function App() {
return <div>
  <CardWrapper innerComponent={<TextComponent/>}></CardWrapper>
  <CardWrapper innerComponent={<TextComponent2/>}></CardWrapper>
</div> 
}

function TextComponent(){
  return <div>
     Hi there!
  </div>
}

function TextComponent2(){
  return <div>
     Hi there2!
  </div>
}

function CardWrapper({innerComponent}){
  return <div style={{border:"2px black solid", padding:20}}>
    {innerComponent}
  </div>
}

export default App

