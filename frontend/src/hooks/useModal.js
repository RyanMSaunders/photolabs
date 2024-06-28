import { useState } from 'react';

// if selected photo is truthy modal open, if falsy modal closed
// 

const useModal = (initialState = {}) => {
  const [modal, setModal] = useState(initialState);

  const setModalState = (key) => {
    // Update state based on previous state (prevState)
    setModal(prevState => ({
      // ...prevState,
      // Toggle the value of the property specified by [key]
      [key]: !prevState[key],
    }));
  };

  const closeModal = (key) => {
    // Update state based on previous state (prevState)
    setModal(prevState => ({
      // ...prevState,
      // Toggle the value of the property specified by [key]
      [key]: false,
    }));
  };


// If photoId doesn't exist in the state (toggle) initially, 
// calling toggleState(photoId) for the first time will add
// photoId to the state with a value of true (assuming it starts as undefined).

  return {modal, setModalState, closeModal};
};

export default useModal;