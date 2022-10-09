import React from 'react';
import { useState, useEffect } from 'react';
import { useAppContext } from '../../context/appContext';
import styled from 'styled-components';
import NumericTimer from '../countdown/NumericTimer';
import CircularTimer from '../countdown/CircularTimer';

// styled component
const Wrapper = styled.div`
  .timercontainer {
    height: calc(100vh - 6rem);
  }

`;

function Timer() {
  const selectedRecipe = useAppContext()
  const stepsArray = Object.values(selectedRecipe.steps);
  const durationArray = Object.values(selectedRecipe.steps).map((val) => val.duration);
  const descriptionArray = Object.values(selectedRecipe.steps).map((val) => val.description);
  const totalDuration = durationArray.reduce((partialSum, a) => partialSum + a, 0)

  const [timerOn, setTimerOn] = useState(false);
  const [time, setTime] = useState(totalDuration)

  const timerInformation = {
    stepsArray,
    durationArray,
    descriptionArray,
    totalDuration
  }


  ////////////////////////////////////////////////////////////

  useEffect(() => {
    setTime(totalDuration)
    setTimerOn(false)
  }, [totalDuration])

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
  });


  ////////////////////////////////////////////////////////////


  function onPause() {
    setTimerOn(!timerOn)
  }

  return (
    <Wrapper>
      <div className='flex-col-cen timercontainer'>
        <NumericTimer time={time} timerInformation={timerInformation}/>
        <CircularTimer />
        <div onClick={onPause}>{timerOn ? "Pause" : "Start"}</div>
      </div>
    </Wrapper>
  );
}

export default Timer;
