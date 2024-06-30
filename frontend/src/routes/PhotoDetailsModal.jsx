import React, { Fragment } from 'react';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoListItem from 'components/PhotoListItem';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {

  const photo = props.photos.find((photo) => photo.id === props.photo); 
  
  const similarPhotos = photo['similar_photos'];
 
  const photoArray = Object.values(similarPhotos)
  

  return (
    <Fragment>
      <div className="photo-details-modal">
        <button className="photo-details-modal__close-button" onClick={() => props.closeModal(props.photo)}>
          <img src={closeSymbol} alt="close symbol" />
        </button>
        
        <article className="photo-list__item" onClick={props.onClick}>
          <PhotoFavButton toggleFavourite={props.toggleFavourite} favourited={props.favourited} photoId={photo.id}/>
          <img src={photo.urls.regular} alt="Photo" className="photo-details-modal__image"/>
          <div className="photo-details-modal__header">
            <img src={photo.user.profile} alt="Profile photo" className="photo-list__user-profile"/>
            <p className="photo-list__user-info">{photo.user.name}</p>
            <p className="photo-list__user-location">{photo.location.city}, {photo.location.country}</p>
            </div>
        </article>
        <article>
          <h2>Similar Photos</h2>
          {photoArray.map((photo) =>
          
            <PhotoListItem
            key={photo.id}
            photo={photo}
            // selected={props.selected}
            favourited={props.favourited}
            toggleFavourite={props.toggleFavourite}
            // onClick={() => props.toggleModal(photo.id)}
            />
          )}

        </article>
        
      </div>
    </Fragment>
  )
};

export default PhotoDetailsModal;
