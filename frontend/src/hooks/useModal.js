import { useState } from 'react';

// Unused useModal custom hook to toggle modal display

const useModal = (initialState = {}) => {
  const [modal, setModal] = useState(initialState);

  const setModalState = (key) => {
    
    setModal(prevState => ({
      [key]: !prevState[key],
    }));
  };

  const closeModal = (key) => {
    setModal(prevState => ({
      [key]: false,
    }));
  };


  return {modal, setModalState, closeModal};
};

export default useModal;