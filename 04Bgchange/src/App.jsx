import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      {/* <h1 className=' bg-green-400 text-black'>hello ji</h1> */}
     <div className= "w-full h-screen duration-200 "
      style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap 
        justify-center bottom-14 inset-x-0 px-2'>
       
        <div className='fixed flex flex-wrap 
        justify-center gap-3 shadow-lg bg-white px-4 py-2
        rounded-3xl'>
            <button 
            onClick={() => setColor("red")}
            className='outline-none px-4 py-4 rounded-full 
            text-white shadow-lg'
            style={{backgroundColor: "red"}}
            >RED</button>
            <button
            onClick={ () => setColor("blue")}
            className='outline-none px-4 py-4 rounded-full 
            text-white shadow-lg'
            style={{backgroundColor: "blue"}}
            >Blue</button>
            <button
            onClick={ () => setColor("green")}
            className='outline-none px-4 py-4 rounded-full 
            text-white shadow-lg'
            style={{backgroundColor: "green"}}
            >Green</button>
            <button
            onClick={ () => setColor("olive")}
            className='outline-none px-4 py-4 rounded-full 
            text-white shadow-lg'
            style={{backgroundColor: "olive"}}
            >Olive</button>
            <button 
            onClick={ () => setColor("white")}
            className='outline-none px-4 py-4 rounded-full 
            text-black shadow-lg'
            style={{backgroundColor: "white"}}
            >White</button>
            <button
            onClick={ () => setColor("black")}
            className='outline-none px-4 py-4 rounded-full 
            text-white shadow-lg'
            style={{backgroundColor: "black"}}
            >Black</button>
            <button
            onClick={ () => setColor("yellow")}
            className='outline-none px-4 py-4 rounded-full 
            text-black shadow-lg'
            style={{backgroundColor: "yellow"}}
            >Yellow</button>

             
        </div>
        </div>
      </div>
    </>
  )
}

export default App
