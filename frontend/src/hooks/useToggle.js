
import { useState } from 'react';

// Unused useToggle custom hook to toggle favourite photos

const useToggle = (initialState = {}) => {
  const [toggle, setToggle] = useState(initialState);

  const toggleState = (key) => {
    
    setToggle(prevState => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return [toggle, toggleState];
};

export default useToggle;
