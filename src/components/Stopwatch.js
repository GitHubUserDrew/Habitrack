import React, { useState, useEffect } from 'react';

function Stopwatch() {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setElapsedTime(0);
  };

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = Math.floor(timeInSeconds % 60);

    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <div id="stopwatchpage">
      <h2>Stop Watch</h2>
       <div>
        <br></br>
      <div id="clocktime">{formatTime(elapsedTime)}</div>
      <br></br>
      <h3>Please press start to began StopWatch </h3>
      <br></br>
      {!isRunning && (
        <button id="start-stopwatch" onClick={handleStart}>Start</button>
      )}
      {isRunning && (
        <button id="pause-stopwatch" onClick={handlePause}>Pause</button>
      )}
      <button id="reset-stopwatch" onClick={handleReset}>Reset</button>
         </div>
    </div>
  );
}

export default Stopwatch