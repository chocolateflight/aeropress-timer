import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  .numerictimer {
    font-size: 2rem;
    font-weight: bold;
  }
`;

////////////////////////////////////////////////////////

// TEMPORARY RECIPE
const recipe = {
  id: 1,
  name: 'Recipe 1',
  author: 'Autor 1 Name',
  steps: {
    1: {
      duration: 10,
      description: 'Do step 1',
    },
    2: {
      duration: 20,
      description: 'Do step 2',
    },
    3: {
      duration: 5,
      description: 'Do step 3',
    },
  },
};

const durationArray = Object.values(recipe.steps).map((val) => val.duration);
const descriptionArray = Object.values(recipe.steps).map((val) => val.description);
const totalDuration = durationArray.reduce((partialSum, a) => partialSum + a, 0);

////////////////////////////////////////////////////////

function NumericTimer(props) {
  const [time, setTime] = useState(totalDuration); // remember to change

  useEffect(() => {
    let interval = null;

    if (props.isPause && time > 0) {
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

  function displayTimer() {
    if (time > 0) {
      return `${Math.floor(time / 60)}:${time % 60 < 10 ? '0' : ''}${time % 60}`;
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
