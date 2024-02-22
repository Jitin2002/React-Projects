import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import Card from './components/card'

export function App() {
  const [count, setCount] = useState(0)
  let myObject ={
    userName :"jiitn",
    age:21
  }
  let newArr = [1,2,3,4]

  return (
    <>
    <h1 className='bg-green-400 text-black p-5 rounded-xl mb-4 '>Tailwind Test</h1>
    <Card username = 'jai shree ram' btnText = "click here " someObj = {newArr}/>
    <Card username = "Jitin " btnText = "click me "/>

    </>
  )
}
