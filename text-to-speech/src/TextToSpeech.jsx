import { useState, useEffect } from "react";
import "./TextToSpeech.css";

const TextToSpeech = ({ text }) => {
  const [isPaused, setIsPaused] = useState(false);
  const [utterance, setUtterance] = useState(null);
  const [voice, setVoice] = useState(null);
  const [pitch, setPitch] = useState(1);
  const [rate, setRate] = useState(1);
  const [volume, setVolume] = useState(1);

  

  useEffect(() => {
    const synth = window.speechSynthesis;
    const u = new SpeechSynthesisUtterance(text);
    const voices = synth.getVoices();
    

    setUtterance(u);
    setVoice(voices[0]);

    return () => {
      synth.cancel();
    };
  }, [text]);



  const handlePlay = () => {
    const synth = window.speechSynthesis;
    

    if (isPaused) {
      synth.resume();
    } else {
      utterance.voice = voice;
      utterance.pitch = pitch;
      utterance.rate = rate;
      utterance.volume = volume;
      synth.speak(utterance);
    }

    setIsPaused(false); 
  };



  const handlePause = () => {
    const synth = window.speechSynthesis;

    synth.pause();

    setIsPaused(true);
  };


  const handleStop = () => {
    const synth = window.speechSynthesis;

    synth.cancel();

    setIsPaused(false);
  };


  const handleVoiceChange = (event) => {
    const voices = window.speechSynthesis.getVoices();
    setVoice(voices.find((v) => v.name === event.target.value));
  };

  const handlePitchChange = (event) => {
    setPitch(parseFloat(event.target.value));
  };

  const handleRateChange = (event) => {
    setRate(parseFloat(event.target.value));
  };

  const handleVolumeChange = (event) => {
    setVolume(parseFloat(event.target.value));
  };

  return (
    <div className="text-to-speech-container">

      {/* Selecting Voice */}
      <div>
        <label htmlFor="voices" className="voice-label">
          Select a Voice:
        </label>
        <select
          id="voices"
          className="voice-select"
          value={voice?.name}
          onChange={handleVoiceChange}
        >
          {window.speechSynthesis.getVoices().map((voice) => (
            <option key={voice.name} value={voice.name}>
              {voice.name}
            </option>
          ))}
        </select>
      </div>

      <div className="slider-container">
         {/* Selecting Pitch */}
        <label className="slider-label">
          Pitch:
          <input
            type="range"
            min="0.5"
            max="2"
            step="0.1"
            className="slider"
            value={pitch}
            onChange={handlePitchChange}
          />
        </label>

         {/* Selecting Rate */}
        <label className="slider-label">
          Speed:
          <input
            type="range"
            min="0.5"
            max="2"
            step="0.1"
            className="slider"
            value={rate}
            onChange={handleRateChange}
          />
        </label>

         {/* Selecting Volume */}
        <label className="slider-label">
          Volume:
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            className="slider"
            value={volume}
            onChange={handleVolumeChange}
          />
        </label>
      </div>
       

      <div className="button-container">

       {/* Play button */}
        <button
          onClick={handlePlay}
          className="play-button"
        >
          {isPaused ? "Resume" : "Play"}
        </button>


       {/* Pause button */}
        <button
          className="pause-button"
          onClick={handlePause}
        >
          Pause
        </button>

       {/* Stop Button */}
        <button
          onClick={handleStop}
          className="stop-button"
        >
          Stop
        </button>
        
      </div>
    </div>
  );
};

export default TextToSpeech;
