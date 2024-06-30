import React from 'react';

import './App.scss';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';


// Note: Rendering a single component to build components in isolation
const App = () => {


  ///// destructuring useAppplicationData
  const { state: state, setPhotoSelected, updateToFavPhotoIds, onClosePhotoDetailsModal, fetchPhotosByTopic} = useApplicationData()
  

  const { favourites, photos, topics, selectedPhoto, displayPhotoDetails } = state;
  console.log('photos App.jsx', photos);
  console.log('favourites App.jsx', favourites);

  // Toggle favourite photo functionality  
  const toggleFavourite = (photoId) => {
    updateToFavPhotoIds(photoId);
  }

  
  // Toggle Modal functionality

  const toggleModal = (photoId) => {
    setPhotoSelected(photoId)
  }


  return (
    <div className="App">
      <HomeRoute 
      topics={topics}
      photos={photos}
      favourited={favourites}
      photo={selectedPhoto}
      toggleFavourite={toggleFavourite}
      toggleModal={toggleModal}
      fetchPhotosByTopic={fetchPhotosByTopic}
      />

      
      {!!selectedPhoto && <PhotoDetailsModal closeModal={onClosePhotoDetailsModal} photo={selectedPhoto} photos={photos} toggleFavourite={toggleFavourite} favourited={favourites}/>}

    </div>
  );
};

export default App;
