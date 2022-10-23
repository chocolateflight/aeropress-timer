
# Aeropress Timer

Hello, and welcome to the Aeropress Timer! This is a React Training Portfolio Project on my journey to learn web development. My goal with this project was to combine as much of what I've already learned about HTML, CSS, JavaScript, and React into one project. This is a front-end project, without its own back-end. This portfolio project is not for commercial purposes.


## Table of contents

- [Access the App](#access-the-app)
- [Overview](#overview)
  - [App Description](#app-description)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Credits](#credits)
- [Author](#author)

## Access the App
This app has been deployed on Netlify: [Aeropress Timer](https://chocolateflight-aeropress-timer.netlify.app/)

## Overview

### App Description
This app is an [Aeropress](https://aeropress.com/) timer. The timer allows you to choose from three Aeropress recipes. For each recipe, a short description is displayed about who the author is, how much coffee is needed, which brewing method to use, and how much water is needed at what temperature. After selecting the recipe, the timer can be started by pressing the start button. The timer consists of three components: At the top is a numerical timer that shows the total time remaining in minutes and seconds. In the centre is an animated circular timer. In the centre of this timer is the current step of the AeroPress recipe. After the recipe has expired, the timer can be reset. At the same time, you can select a new recipe at any time. 

### Links

- Solution URL: [GitHub Repository](https://github.com/chocolateflight/aeropress-timer)
- Live Site URL: [Netlify](https://chocolateflight-aeropress-timer.netlify.app/)

## My process

### Built with

- [ReactJS](https://reactjs.org/) - React framework
- HTML 5
- CSS
- VS Code
- Mobile-first workflow

### What I learned

This was my first React project built from scratch. It was an opportunity for me to learn about and use different React technologies. 

Global Context

```js
import React, { useState, useContext } from 'react';
import recipes from '../assets/recipes/Recipes';

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
```

Timer using useEffect()

```js
  useEffect(() => {
    let interval = null;

    if (timerOn && time > 0) {
      let time2 = time + 1;
      interval = setInterval(() => {
        time2--; // doesn't work without this for some reason
        if (time2 <= 0) {
          setTask('Enjoy your coffee!');
          clearInterval(interval);
        } else {
          if (remainingDurationArray[index] === time - 1) {
            play();
            setTask(descriptionArray[index]);
            setIndex(index + 1);
          }
          setTime((prevTime) => prevTime - 1);
        }
      }, 1000);
    } else {
      if (time <= 0) {
        setTask('Enjoy your coffee!');
      }
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn, time, remainingDurationArray, index, descriptionArray]);
```


### Credits

#### `CSS starter Code`
The CSS starter code was created following a video tutorial of [Coding Addict](https://www.youtube.com/watch?v=UDdyGNlQK5w). 

#### `Normalize.css`
This code includes the CSS Reset [Normalize.css](https://necolas.github.io/normalize.css/).

#### `react-countdown-circle-timer`
This app includes uses the NPM package [react-countdown-circle-timer](https://github.com/vydimitrov/react-countdown-circle-timer).

## Author

- GitHub - [@chocolateflight](https://github.com/chocolateflight)

---------

[![Netlify Status](https://api.netlify.com/api/v1/badges/fbd2c498-4f0f-463f-9f17-099a8a995546/deploy-status)](https://app.netlify.com/sites/chocolateflight-aeropress-timer/deploys)