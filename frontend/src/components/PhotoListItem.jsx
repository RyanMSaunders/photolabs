import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";




const PhotoListItem = (props) => {
  
  return (
    <article className="photo-list__item" onClick={props.onClick}>
      <PhotoFavButton toggleFavourite={props.toggleFavourite}  favourited={props.favourited} photoId={props.photo.id}/>
      <img src={props.photo.urls.regular} alt="Photo" className="photo-list__image"/>
      <div className="photo-list__user-details">
        <img src={props.photo.user.profile} alt="Profile photo" className="photo-list__user-profile"/>
        <div className="photo-list__user-details-info">
          <p className="photo-list__user-info">{props.photo.user.name}</p>
          <p className="photo-list__user-location">{props.photo.location.city}, {props.photo.location.country}</p>
        </div>
      </div>

    </article>

  );
};

export default PhotoListItem;
