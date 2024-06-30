import React from 'react';
import FavBadge from './FavBadge';
import TopicList from './TopicList';

import '../styles/TopNavigationBar.scss'

const TopNavigation = (props) => {
  
  const favourited = props.favourited
  
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={props.topics} fetchPhotosByTopic={props.fetchPhotosByTopic}/>
      <FavBadge isFavPhotoExist={favourited.length > 0 ? true : false} favourited={favourited}/>
    </div>
  )
}

export default TopNavigation;