import React, { useState, useRef, useEffect } from 'react';

function Timer() {
  const [time, setTime] = useState(600);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60).toString().padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  const calculateDegrees = () => {
    const percentage = (time / 600) * 100;
    const degrees = (percentage / 100) * 360;
    return degrees;
  };

  const handleStart = () => {
    if (isRunning) return;

    setIsRunning(true);
    timerRef.current = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);
  };

  const handlePause = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
  };

  const handleReset = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setTime(600);
  };

  useEffect(() => {
    if (time === 0) {
      handlePause();
    }
  }, [time]);

  return (
    <div>
      <div>Time: {formatTime(time)}</div>
      <div>Percentage of Completion: {((time / 600) * 100).toFixed(2)}%</div>
      <div>Progress: {calculateDegrees()} degrees</div>
      <button onClick={handleStart}>Start</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Timer;
