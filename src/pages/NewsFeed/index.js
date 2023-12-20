import React from 'react'
import PostNews from '../../components/NewsFeed/PostNews'
import NewsItem from '../../components/NewsFeed/NewsItem'

function NewsFeed() {
  return (
    <div className='newsfeed'>
      <PostNews/>
      <NewsItem/>
    </div>
  )
}

export default NewsFeed