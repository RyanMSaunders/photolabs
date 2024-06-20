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
      selected={props.selected}
      />
      
      <PhotoList 
      photos={props.photos}
      // useToggle={[props.selected, props.toggleFavourite]}
      selected={props.selected}
      toggleFavourite={props.toggleFavourite}
      />
    </div>
  );
};

export default HomeRoute;
