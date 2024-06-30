import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";



const PhotoList = (props) => {
  const photos = props.photos;
  

  return (
    
    <ul className="photo-list">
      {photos.map(photoData => (
      <PhotoListItem
        key={photoData.id}
        photo={photoData}
        favourited={props.favourited}
        toggleFavourite={props.toggleFavourite}
        onClick={() => props.toggleModal(photoData.id)}
      />
      ))}
    </ul>
  );
};

export default PhotoList;
