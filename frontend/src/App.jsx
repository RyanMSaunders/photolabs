import React from 'react';

import './App.scss';

import HomeRoute from 'routes/HomeRoute';
import useToggle from 'hooks/useToggle';
import photos from 'mocks/photos';
import topics from 'mocks/topics';


// Note: Rendering a single component to build components in isolation
const App = () => {

  const [selected, toggleSelectedPhoto] = useToggle(false);
  
  const handleClick = (photoId) => {
    toggleSelectedPhoto(photoId);
  }

  return (
    <div className="App">
      <HomeRoute 
      topics={topics}
      photos={photos}
      selected={selected}
      handleClick={handleClick}
      />
      
    </div>
  );
};

export default App;
