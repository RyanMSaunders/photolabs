
import { useState } from 'react';

const useApplicationData = (initialState = {}) => {
  
//////////////////// useToggle

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

// To export: toggle (state), setToggle (setState), toggleState (function calling setState)
 

/////////////////// useModal

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



  /// To export: modal (state), setModal (setState), setModalState (function calling setState), closeModal (function)




///////////////////////

//   The state object will contain the entire state of the application.

const state = {toggle, modal};
// (this is exported from useToggle)


const updateToFavPhotoIds = setToggle;
// The updateToFavPhotoIds action can be used to set the favourite photos. setState
// (NOT exported from useToggle)


const setPhotoSelected = toggleState;
// (this is exported from useToggle)  function calling setState




const onClosePhotoDetailsModal = closeModal;
// The onClosePhotoDetailsModal action can be used to close the modal.

/// setState and function calling setState for modal
// setModal
// setModalState

  return {state, setPhotoSelected, updateToFavPhotoIds, onClosePhotoDetailsModal, setModal, setModalState };
};

export default useApplicationData;