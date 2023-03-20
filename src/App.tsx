import React from 'react'
import "./App.css"

// components
import TipTap from './components/TipTap'

const App = () => {
  const handleSubmit = (content: string) => {
    console.log(content);
  };
  return (
    <div className = 'main_wrapper'>
      <div className="message_display">
        <h1>Message Display</h1>
      </div>
      <TipTap onSubmit = {handleSubmit}/>
    </div>
  )
}

export default App