import React, { createElement } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}

const anotherElement = (
  <a href="https://google.com" target='_blank'>Vist google</a>
)

const anotherUser = 'chai and react' // isko inject krna ha

const reactElement = React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'}, // attribute nhi h to isko empty rkh dijye
  'clcik me to visit google',  // text inject krr do 
  anotherUser  // link ke ander hi add ho jye ga( variable inject ho gya)


)

ReactDOM.createRoot(document.getElementById('root'))
.render(

    // <MyApp />
    anotherElement
    // reactElement
    // <App/>
 
)
  