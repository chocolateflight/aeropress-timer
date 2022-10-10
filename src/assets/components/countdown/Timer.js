import React from 'react';
import { useState, useEffect } from 'react';
import { useAppContext } from '../../context/appContext';
import styled from 'styled-components';
import pause from '../../img/pause.png';
import start from '../../img/start.png';
import reset from '../../img/reset.png';
import ding from "../../sounds/din-ding.mp3"
import NumericTimer from './NumericTimer';
import CircularTimer from './CircularTimer';

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
  const [timerOn, setTimerOn] = useState(false);
  const [time, setTime] = useState(totalDuration);
  const [task, setTask] = useState('Welcome to the AeroPress Timer!');
  const [index, setIndex] = useState(1);

  function play() {
    const audio = new Audio(ding);
    audio.play();
  }

  useEffect(() => {
    setTask('Welcome to the AeroPress Timer!');
    setTime(totalDuration);
    setTimerOn(false);
  }, [totalDuration]);

  useEffect(() => {
    let interval = null;

    if (timerOn && time > 0) {
      let time2 = time + 1;
      interval = setInterval(() => {
        time2--;
        if (time2 <= 0) {
          setTask('Enjoy your coffee!');
          clearInterval(interval);
        } else {
          console.log(remainingDurationArray[index])
          console.log(index)
          if (remainingDurationArray[index] === time-1) {
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
      setTime(totalDuration);
      setTimerOn(!timerOn);
      setIndex(0);
      setTask('Welcome to the AeroPress Timer!');
    } else if (time === totalDuration) {
      setTask(descriptionArray[0]);
      setTimerOn(!timerOn);
    } else {
      setTimerOn(!timerOn);
    }
  }

  return (
    <Wrapper>
      <div className='flex-col-cen timercontainer'>
        <NumericTimer time={time} />
        <CircularTimer time={time} description={task} />
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
