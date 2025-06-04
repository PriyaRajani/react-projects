import { useState } from 'react'

import './App.css'

function App() {
   let [counter,setCounter] = useState(7)
  
  const addValue = ()=>{
    //  counter = counter+1
     setCounter(counter+1)
  }
  const removeValue = ()=>{
    setCounter(counter-1)
  }
  return (
    <>
      <h1>Chai or React</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br/><br/>
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
