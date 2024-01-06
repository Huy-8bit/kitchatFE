import React from "react";
import PostNews from "../../components/NewsFeed/PostNews";
import NewsItem from "../../components/NewsFeed/NewsItem";
import NavBar from "../../components/NewsFeed/NavBar";
import RightBar from "../../components/NewsFeed/RightBar";
import LeftBar from "../../components/NewsFeed/LeftBar";

function NewsFeed() {
  return (
    <div className="newsfeed">
      <NavBar />
      <PostNews />
      <LeftBar/>
      <NewsItem />
      <RightBar />
    </div>
  );
}

export default NewsFeed;
