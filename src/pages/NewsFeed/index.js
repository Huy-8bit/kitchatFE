import React from "react";
import PostNews from "../../components/NewsFeed/PostNews";
import NewsItem from "../../components/NewsFeed/NewsItem";
import NavBar from "../../components/NewsFeed/NavBar";
import RightBar from "../../components/NewsFeed/RightBar";

function NewsFeed() {
  return (
    <div className="newsfeed">
      <NavBar />
      <div className="wrapper">
        <div className="box">
          <PostNews />
          <NewsItem />
        </div>
        <RightBar />
      </div>
    </div>
  );
}

export default NewsFeed;
