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
    <div>
      <h2>{time}</h2>
      {intervalId === null && (
        <div>
          <input type="number" value={inputTime} onChange={handleInputChange} />
          <button onClick={startTimer}>Start Timer</button>
        </div>
      )}
    </div>
  );
}

export default Timer;
