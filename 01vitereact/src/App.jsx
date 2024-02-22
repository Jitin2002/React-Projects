
import Chai from "./chai"

function App() {
  const username= 'chai and code'  // { } isme variable ka name likh do 
    // jo bhi { } isme hoga use variable ki thra treat kre ge
   // { } isme evaluated expression hi likhte haa
  return (
    <>
    <Chai/>
     <h1>chai and react {username}</h1>  
     <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, labore.
       
     </p>
     </>

     // error aaye ga ek hi element return krr skte ha 
    // to  inko ek div me daal do 
    // ya fir khali return krr do <>  </> isme dal do -- fregment <> </>
  )
}

export default App
 