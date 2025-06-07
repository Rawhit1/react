import { useState , useCallback, useEffect, useRef } from 'react'
import './App.css'

// useCallback is used to memoize the function so that it doesn't get recreated on every render
// useMemo is used to memoize the value so that it doesn't get recreated on every render



function App() {
  const [length, setLength] = useState(8)
  const [isnumber , setIsNumber] = useState(false)
  const [isChar , setisChar] = useState(false)
  const [password, setPassword] = useState("")

  // useRef hook
  const passwordRef = useRef(null)
 
  
//usecallback is used to memoize the function so that it doesn't get recreated on every render
// usecallback syntax = useCallback(() => {}, [dependencies])
 
// useRef is used to get the reference of the input field so that we can select the text and copy it to clipboard
 // useRef syntax = useRef(initialValue)
 
 
  const generatePassword = useCallback(() => {
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let numbers = "0123456789"
    let symbols = "!@#$%^&*()_+[]{}|;:,.<>?/"
    let passwordChars = chars

    if (isnumber) {
      passwordChars += numbers
    }
    if (isChar) {
      passwordChars += symbols
    }

    let password = ""
    for (let i = 1; i <= length; i++) {
      const randomIndex = Math.floor(Math.random() * passwordChars.length +1)
      password += passwordChars[randomIndex]
    }
    setPassword(password)
  },[length, isnumber, isChar, setPassword])


  // copyPassword function is used to copy the password to clipboard
 const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 99999);
     navigator.clipboard.writeText(password)
     alert("Password copied to clipboard")
  }, [password] )


  // useEffect is used to call the function when the component mounts and when the dependencies change
 // useEffect syntax = useEffect(() => {}, [dependencies])
 
  useEffect(() => {
    generatePassword()
  }, [length, isnumber, isChar, generatePassword])

  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg
     px-4 my-8 py-3 text-orange-500 bg-gray-600'
     >
      <h1 className='text-white text-center my-3'>Password Generator</h1>
     <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-white'>
      <input type="text"
      value={password}
      className='outline-none px-4 py-2 w-full'
      placeholder='Password'
      readOnly
      ref={passwordRef}
      />
     
      <button 
       onClick={copyPassword}
      className='outline-none bg-blue-700
       text-white px-3 py-1 shrink-0.8 cursor-pointer
       hover:bg-blue-800 duration-200 hover:scale-105'
       >copy</button>
     </div>
       <div className='flex text-sm gap-x-2 '>
        <div className='flex items-center gap-x-1'>
          <input type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer' 
          onChange={(e) => setLength(e.target.value)}
          />
          <label > Length:{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={isnumber}
          onChange={() => setIsNumber((prev) => !prev)}
          />
          <label >Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={isChar}
          onChange={() => setisChar((prev) => !prev)}
          />
          <label >Symbols</label>
          </div>
       </div>
     </div>
    </>
  )
}

export default App
