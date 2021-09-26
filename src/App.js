import React from 'react'
import Hello from './component/Hello'
import './App.css'
import State from './component/State'

const App = () => {
  
  return (
    <div className="App">
    <State age ={10}></State>
    <State age={20}></State>
    <State age={30}></State>
    </div>
  )
}

export default App
