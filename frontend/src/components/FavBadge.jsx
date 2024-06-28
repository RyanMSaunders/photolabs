import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist, favourited }) => {
  console.log('isFavPhotoExist', isFavPhotoExist);
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={!!isFavPhotoExist} favouritedBoolean={isFavPhotoExist} />
    </div>
  ) 
};

export default FavBadge;