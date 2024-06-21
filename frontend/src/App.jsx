import React from 'react';

import './App.scss';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useToggle from 'hooks/useToggle';
import useModal from 'hooks/useModal';
import photos from 'mocks/photos';
import topics from 'mocks/topics';


// Note: Rendering a single component to build components in isolation
const App = () => {

  const [selected, toggleSelectedPhoto] = useToggle(false);
  
  const toggleFavourite = (photoId) => {
    toggleSelectedPhoto(photoId);
  }

  const {modal: modalState, setModalState: setModalState, closeModal: closeModal } = useModal(false)

  const toggleModal = (photoId) => {
    setModalState(photoId)
  }

  const photoKey = Object.keys(modalState)



  // console.log('modalState', modalState);
  // console.log('photoDetails', photoKey);

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
