import React from 'react'
import { Provider } from 'react-redux'

import adminStore from '../../../redux/adminStore'

import PostList from './PostList'

const PostContainer = () => {
  return (
    <Provider store={adminStore}>
      <PostList />
    </Provider>
  )
};

export default PostContainer
