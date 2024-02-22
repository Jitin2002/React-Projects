import { useState } from 'react'

function App() {
  const [color,setColor] =useState("olive")

 // onClick -- onclick  ko function hi chiye 

  return (
    <div className='w-full h-screen duration-200'
    style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center
      inset-x-0 px-2 bottom-12'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg
        bg-white px-3 py-2 rounded-xl '>
          <button 
          onClick={()=>setColor("red")}
           className='outline-none px-4 py-1 rounded-full
          text-white shadow-lg'
          style={{backgroundColor:"red"}}>Red</button>
          <button 
          onClick={()=>setColor("green")}
          className='outline-none px-4 py-1 rounded-full
          text-white shadow-lg'
          style={{backgroundColor:"green"}}>Green</button>
          <button 
          onClick={()=>setColor("yellow")}
          className='outline-none px-4 py-1 rounded-full
          text-white shadow-lg'
          style={{backgroundColor:"yellow"}}>yellow</button>
          <button 
          onClick={()=>setColor("blue")}
          className='outline-none px-4 py-1 rounded-full
          text-white shadow-lg'
          style={{backgroundColor:"blue "}}>Blue</button>
        </div>
        </div>
    </div>
   
  )
}

export default App