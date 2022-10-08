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

  return (
    <Wrapper>
      <div className='flex-col-cen timercontainer'>
        <NumericTimer/>
        <CircularTimer/>
        <div>Pause</div>
      </div>
    </Wrapper>
  );
}

export default Timer;
