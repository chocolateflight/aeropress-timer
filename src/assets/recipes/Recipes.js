const recipes = [
  {
    id: 0,
    name: 'Ultimate AeroPress Recipe',
    author: 'James Hoffmann',
    setup: {
      method: "Upright",
      beans: "11g, Fine Grind",
      water: "200g, 95 degrees Celsius"
    },
    steps: {
      1: {
        duration: 120,
        description: 'Pour 200g of hot water over the grounds. Insert plunger at the top and lift up a bit to create a seal.',
      },
      2: {
        duration: 30,
        description: 'Give the cup and brew chamber a swirl, then let sit for a while longer',
      },
      3: {
        duration: 30,
        description: 'Press gently into the cup, all the way through the hissing.',
      },
    },
  },
  {
    id: 1,
    name: 'WAC 2021 Winner',
    author: 'Tuomas Merikanto',
    setup: {
      method: "Inverted",
      beans: "18g, Coarse Grind",
      water: "200g, 80 degrees Celsius"
    },
    steps: {
      1: {
        duration: 10,
        description: 'Pour 50g of hot water over grounds',
      },
      2: {
        duration: 5,
        description: 'Stir gently 3 times back and forth',
      },
      3: {
        duration: 15,
        description: 'Pour another 150g of hot water',
      },
      4: {
        duration: 20,
        description: 'Let it sit',
      },
      5: {
        duration: 10,
        description: 'Stir gently 3 times back and forth',
      },
      6: {
        duration: 40,
        description: 'Push out any excess air and attach filter cap. Let it sit.',
      },
      7: {
        duration: 20,
        description: 'Flip and press into pitcher',
      },
      9: {
        duration: 30,
        description: 'Swirl the pitcher',
      },
      10: {
        duration: 10,
        description: 'Pour from altitude into another pitcher.',
      },
    },
  },
  {
    id: 2,
    name: 'Original Recipe',
    author: 'Alan Adler',
    setup: {
      method: "Upright",
      beans: "16g, Medium Grind",
      water: ">95g, 80 degrees Celsius"
    },
    steps: {
      1: {
        duration: 15,
        description: 'Pour water to about 1 1/2 on the champer (95g)',
      },
      2: {
        duration: 10,
        description: 'Stir using the paddle',
      },
      3: {
        duration: 30,
        description: 'Insert plunger and press down all the way to reaching the grounds',
      },
      4: {
        duration: 20,
        description: 'Add additional hot water to the cup until you like it',
      },
    },
  },
  {
    id: 3,
    name: 'Test Name',
    author: 'Test Author',
    setup: {
      method: "Test Method",
      beans: "Test Beans",
      water: "Test Water"
    },
    steps: {
      1: {
        duration: 5,
        description: 'Test Description 1',
      },
      2: {
        duration: 5,
        description: 'Test Description 2',
      },
      3: {
        duration: 5,
        description: 'Test Description 3',
      },
      4: {
        duration: 5,
        description: 'Test Description 4',
      },
    },
  }
];


export default recipes;