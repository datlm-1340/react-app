import React from 'react'
import { Provider } from 'react-redux'
import userStore from '../../../redux/userStore'
import Post from './Post'

const PostDetailContainer = ({post}) => {
  return (
    <Provider store={userStore}>
      <Post post={post} isDetail={true} />
    </Provider>
  )
};

export default PostDetailContainer
