import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  const [counter, setCounter ] = useState(5)
//let counter = 5  ^ just naming for convinience(it is like a function)

  const addValue = () => {
   // counter = counter + 1
    setCounter( (prevCounter) => prevCounter + 1 )
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter(Counter + 1)
   // console.log(counter)
  }

  
  const subtractValue = () => {
    // counter = counter - 1
     setCounter(counter - 1)
    //console.log(counter)
   }

  return (
    <>
      
       <h1>Good to go</h1>
        <h2>Counter value: {counter}</h2>

        <button 
        onClick={addValue}
        >Add Value {counter}</button>
        <br />
        <button
         onClick={subtractValue}
         >Subtract Value {counter}</button>
       



    </>
  )
}

export default App
