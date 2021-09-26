import React from 'react'
import './App.css'
import DayList from './component/DayList';
import Day from './component/Day';
import Header from './component/Header'

const App = () => {
  
  return (
    <div className="App">
      <Header></Header>
      <DayList></DayList>
      <Day></Day>
    </div>
  );
}

export default App
