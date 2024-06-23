import React from 'react';

import './App.scss';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useToggle from 'hooks/useToggle';
import useModal from 'hooks/useModal';
import useApplicationData from 'hooks/useApplicationData';
import photos from 'mocks/photos';
import topics from 'mocks/topics';


// Note: Rendering a single component to build components in isolation
const App = () => {


  ///// destructuring useAppplicationData
  const { state: state, setPhotoSelected: toggleSelectedPhoto, updateToFavPhotoIds, onClosePhotoDetailsModal: closeModal, setModal, setModalState } = useApplicationData(false)

  // destructuring state for selected photos and modal from useApplicationData
  const { toggle: selected, modal: modalState } = state;

  // useToggle functionality
  const toggleFavourite = (photoId) => {
    toggleSelectedPhoto(photoId);
  }

  // console.log('state of selected', selected);

  // useModal functionality

  const toggleModal = (photoId) => {
    setModalState(photoId)
  }

  /// variable used to determine photo to display for modal ///
  const photoKey = Object.keys(modalState)

  return (
    <div className="App">
      <HomeRoute 
      topics={topics}
      photos={photos}
      selected={selected}
      toggleFavourite={toggleFavourite}
      toggleModal={toggleModal}
      />

      {Object.values(modalState).includes(true) && <PhotoDetailsModal closeModal={closeModal} photo={photos[photoKey - 1]} toggleFavourite={toggleFavourite} selected={selected}/>}
      
    </div>
  );
};

export default App;
