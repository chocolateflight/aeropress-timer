import React from 'react';
import styled from 'styled-components';

/*
Responsibility:
- Shows the Numeric timer above the circular timer

Description:
- Receives the time from Timer.js in seconds
- Transforms the times in seconds to a readable format
*/


const Wrapper = styled.div`
  .numerictimer {
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
  }
`;


function NumericTimer(props) {

  function displayTimer() {
    if (props.time > 0) {
      return `${Math.floor(props.time / 60)}:${props.time % 60 < 10 ? '0' : ''}${props.time % 60}`; // transforms the time to readable format
    } else {
      return 'Finished!';
    }
  }

  return (
    <Wrapper>
      <div className='numerictimer'>{displayTimer()}</div>
    </Wrapper>
  );
}

export default NumericTimer;
