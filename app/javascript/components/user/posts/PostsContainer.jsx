import React from 'react'
import { Provider } from 'react-redux'

import userStore from '../../../redux/userStore'

import PostList from './PostList'

const PostsContainer = (posts) => {
  return (
    <Provider store={userStore}>
      <PostList />
    </Provider>
  )
};

export default PostsContainer
