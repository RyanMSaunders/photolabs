import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";



const PhotoList = (props) => {
  const photos = props.photos;
  console.log('photolist photos', photos);
  // console.log(photos);
  // const handleClick = props.handleClick;
  // const useToggle= [props.selected, props.handleClick]

  return (
    //TODO When changing list of favourites state change line 22
    <ul className="photo-list">
      {photos.map(photoData => (
      <PhotoListItem
        key={photoData.id}
        photo={photoData}
        
        // useToggle={[props.selected, props.toggleFavourite]}
        // selected={props.selected}
        // favourited={props.favourited[photoData.id] || false}
        favourited={props.favourited}
        toggleFavourite={props.toggleFavourite}
        onClick={() => props.toggleModal(photoData.id)}
      />
      ))}
    </ul>
  );
};

export default PhotoList;
