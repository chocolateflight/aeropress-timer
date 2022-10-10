import React, {useState} from 'react'
import { useAppContext } from '../../../context/appContext';
import recipes from '../../../recipes/Recipes';

function RecipeList() {
  const { selectRecipe } = useAppContext();
  const [highlightRecipe, setHighlightRecipe] = useState(0)
  function selectionHandler(e) {
    setHighlightRecipe(+e.target.id);
    selectRecipe(+e.target.id);
  }

  return (
    <div>
    {recipes.map(el => (
      <span key={el.id} id={el.id} className={highlightRecipe === el.id ? 'selected' : ''} onClick={selectionHandler}>{el.name}</span>
    ))}
    </div>
  )
}

export default RecipeList