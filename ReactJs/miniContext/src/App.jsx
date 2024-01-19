import { useState } from 'react'
import UserConTextProvider from "./Context/UserContextProvider"
import './App.css'
import Profile from './Components/Profile'
import Login from './Components/Login'

function App() {
  return (
    <UserConTextProvider>
      <h1>Mini Context</h1>
      <Login/>
      <Profile />
    </UserConTextProvider>
  )
}

export default App
