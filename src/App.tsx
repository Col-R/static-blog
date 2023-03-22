import React, { useEffect, useState } from 'react'
import parse from 'html-react-parser';
import "./App.css"

// components
import TipTap from './components/TipTap'

const App = () => {
  const [timestamp, setTimestamp] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const handleSubmit = (content: string) => {
    const now  = new Date();
    const formattedDate = now.toLocaleString();
    setTimestamp(formattedDate);
    setMessage(content);
    setDisplayDiv(true);
  };

  const [displayDiv, setDisplayDiv] = useState<boolean>(false);

  
  return (
    <div className = 'main_wrapper'>
      <div className="messages_wrapper">
        <div className={displayDiv ? ("message_display") : ("message_hidden")}>
          {parse(message)}
          {timestamp}
        </div>
        
        <div className="message_display">
          <h1>Update 2</h1>
          <ul>
            <li>Same goes for this one</li>
            <li>But its a list</li>
          </ul>
        </div>

        <div className="message_display">
          <h1>Update 1</h1>
          <p>Hi there, this is a basic update. You can tell it's an update, because of the way that it is.</p>
        </div>
        
      </div>
      <TipTap onSubmit = {handleSubmit}/>
    </div>
  )
}

export default App