
import React from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {

  const toggleFavourite = props.toggleFavourite;
  
  return (
    <div className="photo-list__fav-icon"> 
      <div className="photo-list__fav-icon-svg">
        <FavIcon 
       
        onClick={() => toggleFavourite(props.photoId)}
        favourited={props.favourited}
        photoId={props.photoId}
        />
      </div>
    </div>
  );
}

export default PhotoFavButton;