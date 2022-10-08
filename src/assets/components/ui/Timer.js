import React from 'react';
import { useState } from 'react';
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

  const [timerOn, setTimerOn] = useState(false);

  function onPause() {
    setTimerOn(!timerOn)
  }

  return (
    <Wrapper>
      <div className='flex-col-cen timercontainer'>
        <NumericTimer isPause={timerOn}/>
        <CircularTimer/>
        <div onClick={onPause}>{timerOn ? "Pause" : "Start"}</div>
      </div>
    </Wrapper>
  );
}

export default Timer;
