import React from 'react'
import { useState ,useEffect} from 'react'
import './App.css'
import {useDispatch} from "react-redux"
import authService from './appwrite/Auth'
import {login , logout} from './store/authSlice'
import { Header,Footer } from './components'
import { Outlet } from 'react-router-dom'

function App() {

  const [loading,setLoading] = useState(true)

  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}))  // login me ek object pass kre ge 
      }
      else {
        dispatch(logout())
      }
      
    })
    .finally(()=> setLoading(false))  // loading ko off krna pde ga 
  },[])
  // finally -- then ho ya catch ho finally run hota hi ha
  

 // conditionally rendering 

 return !loading ? (
  <div className='min-h-screen flex flex-wrap
  content-between bg-gray-400'>
    <div className='w-full block '>
      <Header/>
      <main>
        
       Todo :<Outlet/>
      
      </main>
      <Footer/>
    </div>
  </div>
 ): null
}

export default App
