import React, { useState, useContext } from 'react';
import recipes from '../recipes/Recipes';

/*
Responsibility:
- Controls the Global Context using useContext

Description:
- The Global Context holds the currently selected recipe
- The initial global state automatically selects the first recipe from the list as selected recipe
*/

const initialState = recipes[0];

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [selectedRecipe, setSelectedRecipe] = useState(initialState);

  function selectRecipe(recipe) {
    setSelectedRecipe(recipes[recipe])
  }

  return <AppContext.Provider value={{ ...selectedRecipe, selectRecipe }}>{children}</AppContext.Provider>;
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
