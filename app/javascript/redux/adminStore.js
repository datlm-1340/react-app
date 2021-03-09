import { configureStore } from '@reduxjs/toolkit'

import adminReducer from './adminReducer'

const adminStore = configureStore({
  reducer: adminReducer
})

export default adminStore
