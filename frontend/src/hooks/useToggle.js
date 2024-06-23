
import { useState } from 'react';

const useToggle = (initialState = {}) => {
  const [toggle, setToggle] = useState(initialState);

  const toggleState = (key) => {
    // Update state based on previous state (prevState)
    setToggle(prevState => ({
      ...prevState,
      // Toggle the value of the property specified by [key]
      [key]: !prevState[key],
    }));
  };
// If photoId doesn't exist in the state (toggle) initially, 
// calling toggleState(photoId) for the first time will add
// photoId to the state with a value of true (assuming it starts as undefined).

// useToggle
// in useToggle.js
// Sets state (toggle) and useState (setToggle)
// defines function that calls setToggle (toggleState)
// exports state and function that calls setState (toggle, setToggle)
// in App.jsx 
// deconstructs useState, naming state selected, and function calling setState toggleSelectedPhoto
// defines a function that calls the function that calls setState (toggleFavourite)

  return [toggle, toggleState];
};

export default useToggle;


// In App.jsx, you've done well in creating a global state for the 
  // favorite photos and passing it down to the child components. 
  // However, it seems like you're using a custom hook useToggle to 
  // manage the favorites state. While this is a creative approach, 
  // it might be simpler and more straightforward to use React's useState
  //  hook to manage the favorites state as an array of photo IDs. This way,
  //   you can easily check if a photo is a favorite by checking if its ID is 
  //   in the array, and you can add or remove favorites by adding or removing 
  //   IDs from the array.
