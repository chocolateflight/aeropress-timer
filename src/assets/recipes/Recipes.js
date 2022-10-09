import React from 'react'
import { useAppContext } from '../context/appContext';

////////////////////////////////////////////////////////

const recipes = {
  0: {
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
      }
    }
  },
  1: {
    id: 2,
    name: 'Recipe 2',
    author: 'Autor 2 Name',
    steps: {
      1: {
        duration: 15,
        description: 'Do step 1',
      },
      2: {
        duration: 25,
        description: 'Do step 2',
      },
      3: {
        duration: 10,
        description: 'Do step 3',
      }
    }
  },
  2: {
    id: 3,
    name: 'Recipe 3',
    author: 'Autor 3 Name',
    steps: {
      1: {
        duration: 5,
        description: 'Do step 1',
      },
      2: {
        duration: 15,
        description: 'Do step 2',
      },
      3: {
        duration: 1,
        description: 'Do step 3',
      }
    }
  },
}

// const stepsArray = Object.values(recipe.steps)
// const durationArray = Object.values(recipe.steps).map((val) => val.duration);
// const descriptionArray = Object.values(recipe.steps).map((val) => val.description);
// const totalDuration = durationArray.reduce((partialSum, a) => partialSum + a, 0);

////////////////////////////////////////////////////////

function Recipes() {
  return (
    <div>Hello</div>
  )
}

export default Recipes