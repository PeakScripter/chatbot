# ChatBot Application

## Overview

This project is a **React-based ChatBot application** integrated with **Google Generative AI** for generating conversational responses. Users can send messages to the chatbot, and it will reply with AI-generated responses. 

## Features

- Real-time chat interface.
- Uses Google Generative AI (`gemini` model) for responses.
- Interactive and dynamic message display.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/PeakScripter/chatbot.git
   cd chatbot
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up Google Generative AI API:
   - Replace the placeholder API key in `src/components/ChatBot.js`:
     ```javascript
     const genAI = new GoogleGenerativeAI("YOUR_API_KEY_HERE");
     ```

4. Start the development server:
   ```bash
   npm start
   ```

---

## Usage

1. Navigate to the application in your browser at `http://localhost:3000`.
2. Enter a message in the input field and click "Send."
3. View the chatbot's AI-generated response below your message.

---

## Folder Structure

```plaintext
chatbot/
├── src/
│   ├── components/
│   │   ├── ChatBot.js       # ChatBot component
│   │   ├── chatbot.css      # Styling for the ChatBot
│   ├── index.js             # Entry point for the React application
├── public/
│   ├── index.html           # HTML template
├── package.json             # Project metadata and dependencies
```

---

## Dependencies

- **React**: JavaScript library for building user interfaces.
- **@google/generative-ai**: Library for interacting with Google Generative AI.

---

## Notes

- Make sure to replace the API key in `ChatBot.js` with a valid Google Generative AI API key.
- Ensure that you have access to the `gemini` model in your Google Generative AI account.
