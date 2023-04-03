import React, { useState, useRef, useEffect } from 'react';

function PomodoroTimer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [inputTime, setInputTime] = useState({ work: 25, break: 5 });
  const intervalRef = useRef(null);

  useEffect(() => {
    if (time === 0) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
      setIsBreak((prevIsBreak) => !prevIsBreak);
      alert(isBreak ? 'End break, starting work session' : 'Work session ended, starting break');
      setTime(isBreak ? inputTime.work * 60 : inputTime.break * 60);
      startTimer();
    }
  }, [time]);

  const handleInputChange = (event) => {
    setInputTime({
      ...inputTime,
      [event.target.name]: parseInt(event.target.value),
    });
  };

  const startTimer = () => {
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime === 0) return 0;
        return prevTime - 1;
      });
    }, 1000);
  };

  const pauseTimer = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  const resetTimer = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
    setTime(inputTime.work * 60);
    setIsBreak(false);
  };

  return (
    <div>
      <h1>Pomodoro Timer</h1>
      <br></br>
      <h2>{isBreak ? 'Break Time' : 'Work Time'}</h2>
      <br></br>
      <div>
        <label htmlFor="work-time-input">Enter work time in minutes: </label>
        <input
          type="number"
          id="work-time-input"
          name="work"
          value={inputTime.work}
          onChange={handleInputChange}
          disabled={isRunning}
        />
        <label htmlFor="break-time-input">Enter break time in minutes: </label>
        <input
          type="number"
          id="break-time-input"
          name="break"
          value={inputTime.break}
          onChange={handleInputChange}
          disabled={isRunning}
        />
        <button onClick={startTimer} disabled={isRunning}>
          Start
        </button>
        <button onClick={pauseTimer} disabled={!isRunning}>
          Pause
        </button>
        <button onClick={resetTimer} disabled={!isRunning}>
          Reset
        </button>
      </div>
      <h2>{`${Math.floor(time / 60)
        .toString()
        .padStart(2, '0')}:${(time % 60).toString().padStart(2, '0')}`}</h2>
    </div>
  );
}

export default PomodoroTimer;


