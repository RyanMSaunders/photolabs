
import { useReducer, useEffect } from 'react';


export const ACTIONS = {
    FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
    FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
    SET_PHOTO_DATA: 'SET_PHOTO_DATA',
    SET_TOPIC_DATA: 'SET_TOPIC_DATA',
    SELECT_PHOTO: 'SELECT_PHOTO',
    DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',

    GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS',


    TOGGLE_FAVOURITE: 'TOGGLE_FAVOURITE',
    SET_PHOTO_SELECTED: 'SET_PHOTO_SELECTED',
    CLOSE_PHOTO_DETAILS_MODAL: 'CLOSE_PHOTO_DETAILS_MODAL'
  }

const initialState = {
  favourites: [],
  photos: [],
  topics: [],
  photosByTopic: [],
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
      // this is saying that the selected Photo id in state is not the same as the photoId
      console.log('action.photoId', action.photoId, 'isSelected', isSelected, 'state.selectedPhoto', state.selectedPhoto);
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
    case 'SET_PHOTO_DATA':
      return { ...state, photos: action.payload };
    case 'SET_TOPIC_DATA':
      return { ...state, topics: action.payload };
    case 'GET_PHOTOS_BY_TOPICS':
      console.log(action.payload);
      return { ...state, photos: action.payload };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}


function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log('state', state);
  useEffect(() => {
    fetch('/api/photos')
      .then(res => res.json())
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }))
  }, []);

  useEffect(() => {
    fetch('/api/topics')
      .then(res => res.json())
      .then((data) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }))
  }, []);



  const fetchPhotosByTopic = async (topicId) => {
    try {
      const response = await fetch(`http://localhost:8001/api/topics/photos/${topicId}`);
      const data = await response.json();
      dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: data });
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
  };



  const updateToFavPhotoIds = (photoId) => {
    dispatch({ type: ACTIONS.TOGGLE_FAVOURITE, photoId });
  };

  const setPhotoSelected = (photoId) => {
    dispatch({ type: ACTIONS.SET_PHOTO_SELECTED, photoId });
  };

  const onClosePhotoDetailsModal = (photoId) => {
    dispatch({ type: ACTIONS.CLOSE_PHOTO_DETAILS_MODAL, photoId });
  };

  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    fetchPhotosByTopic
  };
}

export default useApplicationData;


