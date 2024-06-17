import React from "react";

import "../styles/PhotoListItem.scss";




const PhotoListItem = (props) => {
  /* Insert React */
  // props = sampleDataForPhotoListItem;

  return (
    <article>
      <img src={props.imageSource} alt="Photo" />
      <img src={props.profile} alt="Profile photo" />
      <p>{props.username}</p>
      <p>{props.location.city}, {props.location.country}</p>
      

    </article>

  );
};

export default PhotoListItem;
