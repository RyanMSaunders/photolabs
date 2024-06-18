import React from "react";

import "../styles/TopicListItem.scss";


const TopicListItem = (props) => {
  return (
    <div className="topic-list__item top-nav-bar__topic-list">
      <span>{props.topicItem.title}</span>
    </div>
  );

};

export default TopicListItem;
