import React from 'react';
import FavBadge from './FavBadge';
import TopicList from './TopicList';

import '../styles/TopNavigationBar.scss'

const TopNavigation = (props) => {
  const selected = props.selected
  const selectedValues = Object.values(selected)
  console.log('selected values', selectedValues);
  const FavPhotoExists = selectedValues.filter((selectedValue) => true)
  // console.log('fave exists', FavPhotoExists);
  const includesTrue = selectedValues.includes(true)
  console.log('includesTrue', includesTrue);

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={props.topics}/>
      <FavBadge isFavPhotoExist={includesTrue ? selected : null}/>
    </div>
  )
}

export default TopNavigation;