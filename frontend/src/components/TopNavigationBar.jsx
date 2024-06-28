import React from 'react';
import FavBadge from './FavBadge';
import TopicList from './TopicList';

import '../styles/TopNavigationBar.scss'

const TopNavigation = (props) => {
  // const selected = props.selected
  const favourited = props.favourited
  // const selectedValues = Object.values(selected)

  // console.log('selected values', selectedValues);
  // const FavPhotoExists = selectedValues.filter((selectedValue) => true)
  // // console.log('fave exists', FavPhotoExists);
  // const includesTrue = selectedValues.includes(true)
  // console.log('includesTrue', includesTrue);

  // isFavPhotoExists is checking for a boolean- is there a photo that is favorited?
  // FavBadge is the proble,
  // FavIcon needs a favourited array that includes the photoId to fill in the heart

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={props.topics}/>
      <FavBadge isFavPhotoExist={favourited.length > 0 ? true : false} favourited={favourited}/>
    </div>
  )
}

export default TopNavigation;