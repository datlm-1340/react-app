import { combineReducers } from '@reduxjs/toolkit'

import postReducer from '../components/admin/posts/postsSlice'

const adminReducer = combineReducers({
  postReducer: postReducer
})

export default adminReducer
