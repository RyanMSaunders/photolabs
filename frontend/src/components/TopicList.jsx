import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";



const TopicList = (props) => {
  const topics = props.topics;
  
  return (
    <div className="top-nav-bar__topic-list">
      
      {topics.map(topicItem => (
        < TopicListItem 
          key={topicItem.id}
          topicItem={topicItem}
          fetchPhotosByTopic={props.fetchPhotosByTopic}
        />
      ))}
    </div>
  );
};

export default TopicList;
