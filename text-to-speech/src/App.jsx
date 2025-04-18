import React, { useState } from "react";
import TextToSpeech from "./TextToSpeech.jsx";
import "./App.css"; 

const App = () => {
  const [text, setText] = useState("");

  return (
    <div className="app-container">
      <h1 className="title">Text to Speech Converter</h1>
      <TextToSpeech text={text} />

      <textarea
        id="editor"
        rows="8"
        className="text-area"
        placeholder="Please enter your text to select voices...."
        onChange={(e) => setText(e.target.value)}
        required
      ></textarea>
    </div>
  );
};

export default App;
