import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import useToggle from '../hooks/useToggle';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {


  // const [selected, setSelected] = useState(false)

  // function handleClick() {
  //   setSelected((prevSelected) => !prevSelected)
  // }

  // const [selected, handleClick] = useToggle(false);

  const handleClick = props.handleClick;
  const selected = props.selected;

  return (
    <div className="photo-list__fav-icon"> 
      <div className="photo-list__fav-icon-svg">
        {/* Insert React */}
        <FavIcon 
        // onClick handler that triggers handleClick function with the specific photoId as argument
        onClick={() => handleClick(props.photoId)}
        // Determines if the photo represented by props.photoId is selected, defaulting to false if not found
        selected={selected[props.photoId] || false}
        />
      </div>
    </div>
  );
}

export default PhotoFavButton;