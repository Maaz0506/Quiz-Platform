import React from 'react'
import './App.css'
import BasicForm from './components/forms/basicForm'
import SignupForm from './components/forms/signupForm'
// import Greet from './components/greet'
import backgroundImage from "./assets/bg-image.jpg"
import Greet from './components/greet'
// const backgroundImage = "https://images.unsplash.com/photo-1540835296355-c04f7a063cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"


const App = () => {

  return (
    <>
      <div className="App overflow-x-hidden h-screen bg-no-repeat"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: 'cover',
      }}>
      </div>
      <Greet/>
      {/* <BasicForm/> */}
      <SignupForm />
      
    </>
  )
}

export default App
