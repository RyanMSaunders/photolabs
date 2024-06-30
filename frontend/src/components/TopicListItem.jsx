import React from "react";

import "../styles/TopicListItem.scss";
import { useEffect } from "react";


const TopicListItem = (props) => {
  const fetchPhotosByTopic = props.fetchPhotosByTopic;
  console.log('topic item', props.topicItem.id);
  const topicItemId = props.topicItem.id
  

  const handleClick = (topicId) => {
    fetchPhotosByTopic(topicId);
  };

  return (
    <div className="topic-list__item top-nav-bar__topic-list" onClick={() => handleClick(topicItemId)}>
      <span>{props.topicItem.title}</span>
    </div>
  );

};

export default TopicListItem;
