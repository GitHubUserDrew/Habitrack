import React, { useState } from 'react';

function Timer() {
  const [time, setTime] = useState(0);
  const [inputTime, setInputTime] = useState('');
  const [intervalId, setIntervalId] = useState(null);

  const handleInputChange = (event) => {
    setInputTime(event.target.value);
  };

  const startTimer = () => {
    const newTime = parseInt(inputTime, 10);
    if (newTime > 0 && newTime <= 3600) {
      setTime(newTime);
      setInputTime('');
      const id = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
      setIntervalId(id);
    } else {
      alert('Please enter a valid time between 1 second and 1 hour.');
    }
  };

  const stopTimer = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  if (time === 0 && intervalId) {
    stopTimer();
    alert('Timer has ended!');
  }

  return (
    <div className="timerpage">
      <h1 id="timerH1" >Timer</h1>
      <br></br>
      <h2 id= "time">{time}</h2>
      <br></br>
      <h3> </h3>
      {intervalId === null && (
        <div>
          <label id="timerlabel" htmlFor="timedisplay">Please enter time and press start button.</label>
          <input id="timedisplay" type="number" value={inputTime} onChange={handleInputChange} />
          <button id="start-timer-button" onClick={startTimer}>Start Timer</button>
        </div>
      )}
    </div>
  );
}

export default Timer;
