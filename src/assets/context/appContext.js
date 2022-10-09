import React, { useState, useContext } from 'react';

const initialState = {
  selectedRecipe: 1
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  function selectRecipe(recipe) {
    setState(recipe)
  }

  return <AppContext.Provider value={{ ...state, selectRecipe }}>{children}</AppContext.Provider>;
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
