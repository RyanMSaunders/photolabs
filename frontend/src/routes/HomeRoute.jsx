import React from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  return (
    <div className="home-route">
      {/* Insert React */}
      <TopNavigation 
      topics={props.topics}/>
      <PhotoList 
      photos={props.photos}
      // useToggle={[props.selected, props.handleClick]}
      selected={props.selected}
      handleClick={props.handleClick}
      />
    </div>
  );
};

export default HomeRoute;
