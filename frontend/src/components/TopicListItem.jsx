import React from "react";

import "../styles/TopicListItem.scss";
import { useEffect } from "react";


const TopicListItem = (props) => {
  const fetchPhotosByTopic = props.fetchPhotosByTopic;
  console.log('topic item', props.topicItem.id);
  const topicItemId = props.topicItem.id
  
  // useEffect(() => {
  
  //   // No need for useEffect here, just directly call fetchPhotosByTopic
  //   console.log('fetchPhotosByTopic called');
  //   // fetchPhotosByTopic(topicItemId);
    
  //     fetchPhotosByTopic(topicItemId);

  // }, [topicItemId]);


  const handleClick = (topicId) => {
    // Call the function to fetch photos by the topicId
    fetchPhotosByTopic(topicId);
  };

  // // useEffect to fetch photos when component mounts or topicItem.id changes
  // useEffect(() => {
  //   fetchPhotosByTopic(topicItemId);
  // }, []);

  // fetchPhotosByTopic, topicItemId

  return (
    <div className="topic-list__item top-nav-bar__topic-list" onClick={() => handleClick(topicItemId)}>
      <span>{props.topicItem.title}</span>
    </div>
  );

};

export default TopicListItem;
