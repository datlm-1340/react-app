import { combineReducers } from '@reduxjs/toolkit'

import postReducer from '../components/user/posts/postsSlice'

const userReducer = combineReducers({
  postReducer: postReducer
})

export default userReducer
