import { useState,useCallback,useEffect,useRef } from 'react'



function App() {
  const [length ,setLength] =useState(8)
  const [numberAllowed , setNumberAllowed]=useState(false)
  const [characterAllowed, setCharacterAllowed]=useState(false)
  const [passward,setPassward]=useState("")

  //useref hook 
  const passwordRef = useRef(null)

  // usecallback(fn,dependancies)
  const passwardGenerator =  useCallback(()=>{
    let pass =""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str+="0123456789"

    if(characterAllowed) str+="!@#$%^&*()_+=[]{}~`'"

    for(let i=1;i<=length;i++){
      let char =Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char)

    }
    setPassward(pass)

  },[length,numberAllowed,characterAllowed,setPassward])

  const copyPasswordToClipBord=useCallback(()=>{
    passwordRef.current?.select()   // optionally select --  ?.select()
    passwordRef.current?.setSelectionRange(0,20 )  // range ko select
    window.navigator.clipboard.writeText(passward) // copy to clipBOard

  },
  [passward])

  useEffect(()=>{ // inme se kuch bhi change ho to run krr do
    passwardGenerator()
  },[length,numberAllowed,characterAllowed,passwardGenerator])
  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md
    rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
      <h1 className='text-white text-center
      my-4'>Password Generator</h1>
      <div className='className="flex shadow
      rounded-lg overflow-hidden mb-4'>
        <input 
        type="text"
        value={passward}
        className='outline-none w-full py-1 px-3'
        placeholder="passward" 
        readOnly 
        ref={passwordRef}/>
        <button
        onClick={copyPasswordToClipBord}
        className='outline-none bg0blue-700 text-white
        bg-blue-700
        px-3 py-0.5 shrink-0'>Copy
        </button>

      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" name=""
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}} 
          />
          <label htmlFor="">Length:{length} </label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={numberAllowed}
          id='numberInput'
          onChange={()=>{setNumberAllowed((prev)=>!prev)}}
           />
           <label  htmlFor='numberInput' >Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={characterAllowed}
          id='charInput'
          onChange={()=>{setCharacterAllowed((prev)=>!prev)}}
           />
           <label htmlFor='charInput' >Character</label>
        </div>
      </div>
       </div>
   
     
    </>
  )
}

export default App
