import React from 'react';
import styled from 'styled-components';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

/*
Responsibility:
- Displays Circular Timer
- Displays Active Step

Description:
- Receives the description props from Timer.js and displays it.
*/

const Wrapper = styled.div`
  .circulartimer {
    position: relative;
    z-index: -10;
    border-radius: 50%;
  }

  .description {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-size: 0.9rem;
  }

  .test {
    color: blue;
  }
`;


function CircularTimer(props) {

  return (
    <Wrapper>
      <div className="circulartimer">
      <CountdownCircleTimer
        className="test"
        key={props.reset}
        isPlaying={props.isPlaying}
        duration={props.totalDuration}
        colors={'#DDC7CB'}
        trailColor={"#142228"}
        size="320"
        strokeWidth="20"
        rotation={'counterclockwise'}
      >
      </CountdownCircleTimer>
      <small className='description'>{props.description}</small>
      </div>
    </Wrapper>
  );
}

export default CircularTimer;
