import React, { Fragment } from 'react';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoListItem from 'components/PhotoListItem';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {

  // console.log(props.photo);
  const similarPhotos = props.photo.similar_photos;
  const photoArray = Object.values(similarPhotos)
  // console.log('photoArray', photoArray);




  return (
    <Fragment>
      <div className="photo-details-modal">
        <button className="photo-details-modal__close-button" onClick={() => props.closeModal()}>
          <img src={closeSymbol} alt="close symbol" />
        </button>
        
        <article className="photo-list__item" onClick={props.onClick}>
          <PhotoFavButton toggleFavourite={props.toggleFavourite} selected={props.selected} photoId={props.photo.id}/>
          <img src={props.photo.urls.regular} alt="Photo" className="photo-details-modal__image"/>
          <div className="photo-details-modal__header">
            <img src={props.photo.user.profile} alt="Profile photo" className="photo-list__user-profile"/>
            <p className="photo-list__user-info">{props.photo.user.name}</p>
            <p className="photo-list__user-location">{props.photo.location.city}, {props.photo.location.country}</p>
            </div>
        </article>
        <article>
          <h2>Similar Photos</h2>
          {photoArray.map((photo) =>
          
            <PhotoListItem
            key={photo.id}
            photo={photo}
            selected={props.selected}
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
