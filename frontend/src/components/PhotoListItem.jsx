import React from "react";

import "../styles/PhotoListItem.scss";




const PhotoListItem = (props) => {
  /* Insert React */
  // props = sampleDataForPhotoListItem;

  return (
    <article className="photo-list__item">
      <img src={props.photo.imageSource} alt="Photo" className="photo-list__image"/>
      <img src={props.photo.profile} alt="Profile photo" className="photo-list__user-profile"/>
      <div className="photo-list__user-details">
        <p className="photo-list__user-info">{props.photo.username}</p>
        <p className="photo-list__user-location">{props.photo.location.city}, {props.photo.location.country}</p>
      </div>

    </article>

  );
};

export default PhotoListItem;
