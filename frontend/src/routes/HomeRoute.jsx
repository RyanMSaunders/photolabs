import React from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  return (
    <div className="home-route">
      {/* Insert React */}
      <TopNavigation 
      topics={props.topics}
      favourited={props.favourited}
      fetchPhotosByTopic={props.fetchPhotosByTopic}
      />
      
      <PhotoList 
      photos={props.photos}
      // useToggle={[props.selected, props.toggleFavourite]}
      photo={props.photo}
      favourited={props.favourited}
      toggleFavourite={props.toggleFavourite}
      toggleModal={props.toggleModal}
      />
    </div>
  );
};

export default HomeRoute;
