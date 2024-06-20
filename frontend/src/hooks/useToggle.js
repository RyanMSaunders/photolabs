
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

  return [toggle, toggleState];
};

export default useToggle;
