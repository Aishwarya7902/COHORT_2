import { useState } from 'react'
import React from 'react';


function App() {
return <div>
  <CardWrapper >
    Hi There
  </CardWrapper>
  
</div> 
}


function CardWrapper({children}){
  return <div style={{border:"2px black solid", padding:20}}>
    {children}
  </div>
}

export default App

