import React from 'react';
import { useState, useEffect } from 'react';

function NumericTimer() {
  const [time, setTime] = useState(6);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval = null;

    if (timerOn && time > 0) {
      let time2 = time + 1;
      interval = setInterval(() => {
        time2--;
        if (time2 <= 0) {
          clearInterval(interval);
        } else {
          setTime((prevTime) => prevTime - 1);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    <div>
      <div>{`${Math.floor(time / 60)}:${time % 60 < 10 ? '0' : ''}${time % 60}`}</div>
      <div>
        <button onClick={() => setTimerOn(true)}>Start</button>
        <button onClick={() => setTimerOn(false)}>Stop</button>
        <button onClick={() => setTimerOn(true)}>Resume</button>
      </div>
    </div>
  );
}

export default NumericTimer;
