import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import useToggle from '../hooks/useToggle';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {


  // const [selected, setSelected] = useState(false)

  // function toggleFavourite() {
  //   setSelected((prevSelected) => !prevSelected)
  // }

  // const [selected, toggleFavourite] = useToggle(false);

  const toggleFavourite = props.toggleFavourite;
  const selected = props.selected;

  return (
    <div className="photo-list__fav-icon"> 
      <div className="photo-list__fav-icon-svg">
        {/* Insert React */}
        <FavIcon 
        // onClick handler that triggers toggleFavourite function with the specific photoId as argument
        onClick={() => toggleFavourite(props.photoId)}
        // Determines if the photo represented by props.photoId is selected, defaulting to false if not found
        selected={selected[props.photoId] || false}
        />
      </div>
    </div>
  );
}

export default PhotoFavButton;