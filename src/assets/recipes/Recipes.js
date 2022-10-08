import React from 'react'

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

function Recipes() {
  return (
    <div>Recipes</div>
  )
}

export default Recipes