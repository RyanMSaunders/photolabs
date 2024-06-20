import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";



const PhotoList = (props) => {
  const photos = props.photos;
  // console.log(photos);
  // const handleClick = props.handleClick;
  // const useToggle= [props.selected, props.handleClick]

  return (
    
    <ul className="photo-list">
      {photos.map(photoData => (
      <PhotoListItem
        key={photoData.id}
        photo={photoData}
        // useToggle={[props.selected, props.handleClick]}
        selected={props.selected}
        handleClick={props.handleClick}
      />
      ))}
    </ul>
  );
};

export default PhotoList;
