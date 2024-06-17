import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {


  const [selected, setSelected] = useState(false)

  function handleClick() {
    setSelected((prevSelected) => !prevSelected)
  }

  return (
    <div className="photo-list__fav-icon"> 
      <div className="photo-list__fav-icon-svg">
        {/* Insert React */}
        <FavIcon 
        handleClick={handleClick}
        selected={selected}
        />
      </div>
    </div>
  );
}

export default PhotoFavButton;