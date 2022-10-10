import React, { useState } from 'react';
import { useAppContext } from '../../../context/appContext';
import recipes from '../../../recipes/Recipes';

function RecipeList() {
  const { selectRecipe } = useAppContext();
  const [highlightRecipe, setHighlightRecipe] = useState(0);
  function selectionHandler(e) {
    setHighlightRecipe(+e.target.id);
    selectRecipe(+e.target.id);
  }

  return (
    <div>
      {recipes.map((el) => (
        <div>
          <span
            key={el.name}
            id={el.id}
            className={highlightRecipe === el.id ? 'coffeename selected' : 'coffeename'}
            onClick={selectionHandler}
          >
            {el.name}
          </span>
          <span
            className={highlightRecipe === el.id ? 'coffeedesc selected' : 'coffeedesc'}
          >
            <small>{`Method: ${el.setup.method}`}</small>
            <small>{`Coffee: ${el.setup.beans}`}</small>
            <small>{`Water: ${el.setup.water}`}</small>
          </span>
        </div>
      ))}
    </div>
  );
}

export default RecipeList;
