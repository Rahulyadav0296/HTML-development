import { useState } from 'react'


function App() {
  const [counter, setCounter] = useState(15)
  
  // let counter = 15
  
  const addValue = () => {
    setCounter(counter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <div>
      <h1>Chai aur Code</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br/>
      <button onClick={removeValue}> Remove Value: {counter} </button>
      <p>Footer Value: {counter}</p> 
    </div>
  )
}

export default App
