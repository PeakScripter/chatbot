// src/components/ChatBot.js
import React, { useState } from 'react';
import './chatbot.css';

const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI("AIzaSyAwODofnsLqWhvN_Cj9RLHcOosLUAFHWww");

async function run(promptt) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});

  const prompt = promptt

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
  return text;
}

const ChatBot = () => {
const [userMessage, setUserMessage] = useState('');
const [messages, setMessages] = useState([]);

const handleSubmit = async (e) => {
  e.preventDefault();
  setMessages([...messages, { sender: 'user', content: userMessage }]);
  setUserMessage('');

  const response = await run(userMessage);
  setMessages(prevMessages => [...prevMessages, { sender: 'bot', content: response }]);
};

return (
    <div>
      <h1>ChatBot</h1>
      <div className="messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.content}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={userMessage} onChange={(e) => setUserMessage(e.target.value)} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatBot;