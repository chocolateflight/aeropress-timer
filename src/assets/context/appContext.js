import React, { useState, useContext } from 'react';
import recipes from '../recipes/Recipes';

const initialState = recipes[1];

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
