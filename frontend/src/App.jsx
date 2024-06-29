import React from 'react';

import './App.scss';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useToggle from 'hooks/useToggle';
import useModal from 'hooks/useModal';
import useApplicationData from 'hooks/useApplicationData';
// import photos from 'mocks/photos';
// import topics from 'mocks/topics';


// Note: Rendering a single component to build components in isolation
const App = () => {


  ///// destructuring useAppplicationData
  const { state: state, setPhotoSelected, updateToFavPhotoIds, onClosePhotoDetailsModal} = useApplicationData()
  console.log(state);
  // destructuring state for selected photos and modal from useApplicationData
  // const { toggle: selected, modal: modalState } = state;

  const { favourites, photos, topics, selectedPhoto, displayPhotoDetails } = state;
  console.log('photos App.jsx', photos);
  console.log('favourites App.jsx', favourites);

  // useToggle functionality  CLEANUP
  const toggleFavourite = (photoId) => {
    updateToFavPhotoIds(photoId);
  }

  // console.log('state of selected', selected);

  // useModal functionality

  const toggleModal = (photoId) => {
    setPhotoSelected(photoId)
  }

  /// variable used to determine photo to display for modal ///
  // const photoKey = Object.keys(modalState)

  return (
    <div className="App">
      <HomeRoute 
      topics={topics}
      photos={photos}
      // selected={selected}
      favourited={favourites}
      photo={selectedPhoto}
      toggleFavourite={toggleFavourite}
      toggleModal={toggleModal}
      />

      {/* {Object.values(selectedPhoto).includes(true) && <PhotoDetailsModal closeModal={onClosePhotoDetailsModal} photo={photos[photoKey - 1]} toggleFavourite={toggleFavourite} /* selected={selected}  favourited={favourites}/>} */}
      
      {/* // current */}
      {!!selectedPhoto && <PhotoDetailsModal closeModal={onClosePhotoDetailsModal} photo={selectedPhoto} photos={photos} toggleFavourite={toggleFavourite} favourited={favourites}/>}

    </div>
  );
};

export default App;
