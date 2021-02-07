import React from 'react'
import { Provider } from 'react-redux'

import userStore from '../../../redux/userStore'

import Post from './Post'

const PostContainer = (posts) => {
  return (
    <Provider store={userStore}>
      <Post />
    </Provider>
  )
};

export default PostContainer
