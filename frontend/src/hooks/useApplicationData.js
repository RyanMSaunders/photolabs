
import { useState } from 'react';
import { useReducer } from 'react';

import photos from 'mocks/photos';
import topics from 'mocks/topics';

// Refactor initial state to include keys set to default values
// Refactor properties and functions that deal with favourite to use word Favourite
// Selected photo means photo displayed in modal
// Store id's of favourited photos in an array, instead of key with value boolean


// combine useToggle and useModal to output a state object that looks like this:
// {
  //     favorites: [],
  //     photos: [],
  //     topics: [],
  //     selectedPhoto: null,
  //     displayPhotoDetails: false
  //   }



//   function useApplicationData(
//     initialState = {
//       favourites: [],
//       photos: [...photos],
//       topics: [...topics],
//       selectedPhoto: null,
//       displayPhotoDetails: false
//     }
//   ) {
//     const [state, setState] = useState(initialState);
//     // console.log(state);

//     // The updateToFavPhotoIds action can be used to set the favourite photos. setState
//     const updateToFavPhotoIds = (photoId) => {
//       setState((prevState) => {
//         const isFavourite = prevState.favourites.includes(photoId);
  
//         return {
//           ...prevState,
//           favourites: isFavourite
//             ? prevState.favourites.filter(id => id !== photoId)
//             : [...prevState.favourites, photoId]
//         };
//       });
//     };

// // function used when the user selects a photo- function calling setState
// // options for data are either photoId or null
//     const setPhotoSelected = (photoId) => {
//       setState((prevState) => {
//         const isSelected = prevState.selectedPhoto === photoId;
  
//         return {
//           ...prevState,
//           selectedPhoto: isSelected ? null : photoId,
//           displayPhotoDetails: !isSelected
//         };
//       });
//     }

//   // function used to close the modal
//     const onClosePhotoDetailsModal = (photoId) => {
//       setState((prevState) => {
//         if (prevState.selectedPhoto === photoId) {
//           return {
//             ...prevState,
//             selectedPhoto: null,
//             displayPhotoDetails: false
//           };
//         }
//         return prevState;
//       });
//     };

//     return {
//       state,
//       updateToFavPhotoIds,
//       setPhotoSelected,
//       onClosePhotoDetailsModal
//     };
//   }


//   export default useApplicationData;



////////////////////////// implementing useReducer


const initialState = {
  favourites: [],
  photos: [...photos],
  topics: [...topics],
  selectedPhoto: null,
  displayPhotoDetails: false
};

function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_FAVOURITE':
      const isFavourite = state.favourites.includes(action.photoId);
      return {
        ...state,
        favourites: isFavourite
          ? state.favourites.filter(id => id !== action.photoId)
          : [...state.favourites, action.photoId]
      };
    case 'SET_PHOTO_SELECTED':
      const isSelected = state.selectedPhoto === action.photoId;
      return {
        ...state,
        selectedPhoto: isSelected ? null : action.photoId,
        displayPhotoDetails: !isSelected
      };
    case 'CLOSE_PHOTO_DETAILS_MODAL':
      if (state.selectedPhoto === action.photoId) {
        return {
          ...state,
          selectedPhoto: null,
          displayPhotoDetails: false
        };
      }
      return state;
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

function useApplicationData(initialStateOverride) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateToFavPhotoIds = (photoId) => {
    dispatch({ type: 'TOGGLE_FAVOURITE', photoId });
  };

  const setPhotoSelected = (photoId) => {
    dispatch({ type: 'SET_PHOTO_SELECTED', photoId });
  };

  const onClosePhotoDetailsModal = (photoId) => {
    dispatch({ type: 'CLOSE_PHOTO_DETAILS_MODAL', photoId });
  };

  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal
  };
}

export default useApplicationData;






// Responsible for making all updates to state
// function reducer(state, action) {
  // reducer gets passed in state, and whatever it returns becomes the new state
  // a) Take in state
  // b) create a copy of it
  // c) modify the copy
  // d) return copy, which is the new state

  // action argument is whatever you passed into the dispatch function
  // action - what do you want to do to state?
  // Typically you pass in object. Type - what type of update do you want to make to state?
  // in the reducer include conditional statement.. if action.type === increment, do something
  // dispatch making a polite request to reducer, and specifying the type of action to take to update the state
  // reducer carries out the logic to update state
  // in reducer: a) Take in state b) create a copy of it c) modify the copy d) return copy, which is the new state



// /* insert app levels actions below */
// export const ACTIONS = {
//   FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
//   FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
//   SET_PHOTO_DATA: 'SET_PHOTO_DATA',
//   SET_TOPIC_DATA: 'SET_TOPIC_DATA',
//   SELECT_PHOTO: 'SELECT_PHOTO',
//   DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
// }

// // Same idea as initialState in useState
// // const initialState = {
// //   favourites: {},
// //   photos: [],
// //   topics: [],
// //   selectedPhoto: null,
// //   displayPhotoDetails: false
// // };


// function reducer(state, action) {
//   switch (action.type) {
//     case ACTIONS.FAV_PHOTO_ADDED:
//       // Logic to add favorite photo
//       return {
//         // returning copy as updated state
//         ...state,
//         favorites: [...state.favorites, action.payload.id]
//       };
//     case ACTIONS.FAV_PHOTO_REMOVED:
//       // Logic to remove favorite photo
//       return {
//         // returning copy as updated state
//         ...state,
//         favorites: state.favorites.filter(id => id !== action.payload.id)
//       };
//     case ACTIONS.SET_PHOTO_DATA:
//       // Logic to set photo data
//       return {
//         // returning copy as updated state
//         ...state,
//         photos: action.payload.photos
//       };
//     case ACTIONS.SET_TOPIC_DATA:
//       // Logic to set topic data
//       return {
//         // returning copy as updated state
//         ...state,
//         topics: action.payload.topics
//       };
//     case ACTIONS.SELECT_PHOTO:
//       // Logic to select a photo
//       return {
//         // returning copy as updated state
//         ...state,
//         selectedPhoto: action.payload.photo
//       };
//     case ACTIONS.DISPLAY_PHOTO_DETAILS:
//       // Logic to display photo details
//       return {
//         // returning copy as updated state
//         ...state,
//         displayPhotoDetails: true
//       };
//     default:
//       throw new Error(`Unhandled action type: ${action.type}`);
//   }
// }


// function useApplicationData() {
//   const initialState = {
//     favorites: [],
//     photos: [],
//     topics: [],
//     selectedPhoto: null,
//     displayPhotoDetails: false
//   };

//   const [state, dispatch] = useReducer(reducer, initialState);

//   // Example of refactoring a method that uses setState to dispatch an action
//   const toggleState = (id) => {
//     dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { id } });
//   };

//   // Existing code that uses setState replaced with dispatch
//   // Add rest of your methods here, refactoring accordingly

//   return {
//     state,
//     updateToFavPhotoIds,
//     setPhotoSelected,
//     onClosePhotoDetailsModal
//   };
// }










// const useApplicationData = (initialState = {}) => {
  
// //////////////////// useToggle

// const [toggle, setToggle] = useState(initialState);

//   const toggleState = (key) => {
//     // Update state based on previous state (prevState)
//     setToggle(prevState => ({
//       ...prevState,
//       // Toggle the value of the property specified by [key]
//       [key]: !prevState[key],
//     }));
//   };


// // If photoId doesn't exist in the state (toggle) initially, 
// // calling toggleState(photoId) for the first time will add
// // photoId to the state with a value of true (assuming it starts as undefined).

// // To export: toggle (state), setToggle (setState), toggleState (function calling setState)
 

// /////////////////// useModal

//   const [modal, setModal] = useState(initialState);

//   const setModalState = (key) => {
//     // Update state based on previous state (prevState)
//     setModal(prevState => ({
//       // ...prevState,
//       // Toggle the value of the property specified by [key]
//       [key]: !prevState[key],
//     }));
//   };

//   const closeModal = (key) => {
//     // Update state based on previous state (prevState)
//     setModal(prevState => ({
//       // ...prevState,
//       // Toggle the value of the property specified by [key]
//       [key]: false,
//     }));
//   };

//   /// To export: modal (state), setModal (setState), setModalState (function calling setState), closeModal (function)
// ///////////////////////

// //   The state object will contain the entire state of the application.

// const state = {toggle, modal};
// // (this is exported from useToggle)


// const updateToFavPhotoIds = setToggle;
// // The updateToFavPhotoIds action can be used to set the favourite photos. setState
// // (NOT exported from useToggle)


// const setPhotoSelected = toggleState;
// // (this is exported from useToggle)  function calling setState




// const onClosePhotoDetailsModal = closeModal;
// // The onClosePhotoDetailsModal action can be used to close the modal.

// /// setState and function calling setState for modal
// // setModal
// // setModalState

//   return {state, setPhotoSelected, updateToFavPhotoIds, onClosePhotoDetailsModal, setModal, setModalState };
// };

// export default useApplicationData;

// ////////////////////////
// ////////////////////////
// ////////////////////////



////////////////////////// implementing useReducer


// Responsible for making all updates to state
// function reducer(state, action) {
  // reducer gets passed in state, and whatever it returns becomes the new state
  // a) Take in state
  // b) create a copy of it
  // c) modify the copy
  // d) return copy, which is the new state

  // action argument is whatever you passed into the dispatch function
  // action - what do you want to do to state?
  // Typically you pass in object. Type - what type of update do you want to make to state?
  // in the reducer include conditional statement.. if action.type === increment, do something
  // dispatch making a polite request to reducer, and specifying the type of action to take to update the state
  // reducer carries out the logic to update state
  // in reducer: a) Take in state b) create a copy of it c) modify the copy d) return copy, which is the new state



// /* insert app levels actions below */
// export const ACTIONS = {
//   FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
//   FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
//   SET_PHOTO_DATA: 'SET_PHOTO_DATA',
//   SET_TOPIC_DATA: 'SET_TOPIC_DATA',
//   SELECT_PHOTO: 'SELECT_PHOTO',
//   DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
// }

// // Same idea as initialState in useState
// const initialState = {
//   favourites: {},
//   photos: [],
//   topics: [],
//   selectedPhoto: null,
//   displayPhotoDetails: false
// };


// function reducer(state, action) {
//   switch (action.type) {
//     case ACTIONS.FAV_PHOTO_ADDED:
//       // Logic to add favorite photo
//       return {
//         // returning copy as updated state
//         ...state,
//         favorites: [...state.favorites, action.payload.id]
//       };
//     case ACTIONS.FAV_PHOTO_REMOVED:
//       // Logic to remove favorite photo
//       return {
//         // returning copy as updated state
//         ...state,
//         favorites: state.favorites.filter(id => id !== action.payload.id)
//       };
//     case ACTIONS.SET_PHOTO_DATA:
//       // Logic to set photo data
//       return {
//         // returning copy as updated state
//         ...state,
//         photos: action.payload.photos
//       };
//     case ACTIONS.SET_TOPIC_DATA:
//       // Logic to set topic data
//       return {
//         // returning copy as updated state
//         ...state,
//         topics: action.payload.topics
//       };
//     case ACTIONS.SELECT_PHOTO:
//       // Logic to select a photo
//       return {
//         // returning copy as updated state
//         ...state,
//         selectedPhoto: action.payload.photo
//       };
//     case ACTIONS.DISPLAY_PHOTO_DETAILS:
//       // Logic to display photo details
//       return {
//         // returning copy as updated state
//         ...state,
//         displayPhotoDetails: true
//       };
//     default:
//       throw new Error(`Unhandled action type: ${action.type}`);
//   }
// }



// function useApplicationData() {
//   const initialState = {
//     favorites: [],
//     photos: [],
//     topics: [],
//     selectedPhoto: null,
//     displayPhotoDetails: false
//   };

//   const [state, dispatch] = useReducer(reducer, initialState);

//   // Example of refactoring a method that uses setState to dispatch an action
//   const toggleState = (id) => {
//     dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { id } });
//   };

//   // Existing code that uses setState replaced with dispatch
//   // Add rest of your methods here, refactoring accordingly

//   return {
//     state,
//     toggleState,
//     // Return other actions here as well
//   };
// }
