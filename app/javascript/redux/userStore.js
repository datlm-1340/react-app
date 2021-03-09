import { configureStore } from '@reduxjs/toolkit'

import userReducer from './userReducer'

const userStore = configureStore({
  reducer: userReducer
})

export default userStore
