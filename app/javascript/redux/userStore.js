import { configureStore } from '@reduxjs/toolkit'
import { thunkAction } from 'redux-thunk'

import userReducer from './userReducer'

const userStore = configureStore({
  reducer: userReducer
})

export default userStore
