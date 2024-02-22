import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter , setCounter]=useState(15)  // hooks ha
  // 2 chija milti ha [ counter ,setCounter] 
  // let counter =5

  const addValue = ()=>{
   
    // counter = counter+1
    if(counter<20){
    // setCounter(counter+1)
    setCounter((prevCounter)=>prevCounter+1) 
    setCounter((prevCounter)=>prevCounter+1)
    setCounter((prevCounter)=>prevCounter+1)
    setCounter((prevCounter)=>prevCounter+1) // ab result 19 aaya ga  // previous counter le re ho 
    // setCounter(counter+1) 
    // ek click prr ek hi value badh ti ha
    // batches me chijo ko bhj ta ha
    //sara ek hi counter ko update krr ra ha

    }
    
    // console.log('clicked ',counter)
  }
  const removeValue=()=>{
    if(counter>0){
    setCounter(counter-1)
    }
    
  }
 return (
    <>
     <h1>Chai and react</h1>
     <h2>Counter value : {counter}</h2>
     <button
     onClick={addValue}     
     >Add value {counter}</button>
     <br />
     <button
     onClick={removeValue}
     >Remove value {counter}</button>
     <p>footer {counter}</p>
    </>
  )
}

export default App
