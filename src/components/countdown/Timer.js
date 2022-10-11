import React from 'react';
import { useState, useEffect } from 'react';
import { useAppContext } from '../../context/appContext';
import styled from 'styled-components';
import pause from '../../assets/img/pause.png';
import start from '../../assets/img/start.png';
import reset from '../../assets/img/reset.png';
import ding from '../../assets/sounds/din-ding.mp3';
import NumericTimer from './NumericTimer';
import CircularTimer from './CircularTimer';

/*
Responsibility:
- All the calculations for the countdown
- Controls the Stop, Play and Reset Button
- Controls which task of the coffee making process is currently active
- Controls if the Timer is currently running or not
- Plays a sound after one step is completed

Description:
- Component receives the currently selected recipe from the Global Context
- Components creates a variety of arrays based on this selected recipe 
- Component uses multiple states to control various aspects of the timer
*/

// styled component
const Wrapper = styled.div`
  .timercontainer {
    height: calc(100vh - 6rem);
  }

  .icon {
    height: 10rem;
  }
`;

function Timer() {
  // variables
  const selectedRecipe = useAppContext();
  const durationArray = Object.values(selectedRecipe.steps).map((val) => val.duration);
  const descriptionArray = Object.values(selectedRecipe.steps).map(
    (val) => val.description
  );
  const totalDuration = durationArray.reduce((partialSum, a) => partialSum + a, 0);

  let a = 0;
  const remainingDurationArray = durationArray.map((el) => {
    let newEl = totalDuration - a;
    a = a + el;
    return newEl;
  });

  // functions
  // controls whether timer is on or not
  const [timerOn, setTimerOn] = useState(false);

  // controls the remaining time of the recipe
  const [time, setTime] = useState(totalDuration);

  // controls the currently active task
  const [task, setTask] = useState('Welcome to the AeroPress Timer!');

  // controls the position of the recipe in the descriptionArray and remainingDurationArray
  const [index, setIndex] = useState(1);

  // controls the reset of the circular timer
  const [isReset, setIsReset] = useState(false);

  function play() {
    const audio = new Audio(ding);
    audio.play();
  }

  useEffect(() => {
    setTask('Welcome to the AeroPress Timer!');
    setTime(totalDuration);
    setTimerOn(false);
    setIsReset((isReset) => !isReset);
  }, [totalDuration]);

  // actual countdown
  useEffect(() => {
    let interval = null;

    if (timerOn && time > 0) {
      let time2 = time + 1;
      interval = setInterval(() => {
        time2--; // doesn't work without this for some reason
        if (time2 <= 0) {
          setTask('Enjoy your coffee!');
          clearInterval(interval);
        } else {
          if (remainingDurationArray[index] === time - 1) {
            play();
            setTask(descriptionArray[index]);
            setIndex(index + 1);
          }
          setTime((prevTime) => prevTime - 1);
        }
      }, 1000);
    } else {
      if (time <= 0) {
        setTask('Enjoy your coffee!');
      }
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn, time, remainingDurationArray, index, descriptionArray]);

  function onPause() {
    if (timerOn && time <= 0) {
      // reset button
      setTime(totalDuration);
      setTimerOn(!timerOn);
      setIndex(1);
      setTask('Welcome to the AeroPress Timer!');
      setIsReset(!isReset);
    } else if (time === totalDuration) {
      // start button
      setTask(descriptionArray[0]);
      setTimerOn(!timerOn);
    } else {
      // pause button
      setTimerOn(!timerOn);
    }
  }

  return (
    <Wrapper>
      <div className='flex-col-cen timercontainer'>
        <NumericTimer time={time} />
        <CircularTimer
          totalDuration={totalDuration}
          reset={isReset}
          isPlaying={timerOn}
          description={task}
        />
        <img
          className='icon'
          src={!timerOn && time > 0 ? start : timerOn && time <= 0 ? reset : pause}
          alt=''
          onClick={onPause}
        />
      </div>
    </Wrapper>
  );
}

export default Timer;
