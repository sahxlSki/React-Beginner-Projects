import React, { useState, useEffect } from "react";
 import './App.css'



function Timer() {
    const [time, settime] = useState(0)
    const [isRunning, setisRunning] = useState(false)
    
    
    
    useEffect(() => {
        let interval
        if (isRunning) {
            interval = setInterval(() => {
                settime((prevtime) => prevtime + 1)
            }, 1000);
        } else if (!isRunning) {
            clearInterval(interval)
        }

        return () => clearInterval(interval)


    }, [isRunning])


    const startTimer = () => {
        setisRunning(true)

    }

    const stopTimer = () => {
        setisRunning(false)


    }

    const resetTimer = () => {
        setisRunning(false)
        settime(0)

    }


    return (

        <div className="container">
            <h1>Timer App</h1>

            <h2>{time} seconds</h2>

            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
            <button onClick={resetTimer}>Reset</button>

        </div>

    )
}

export default Timer;