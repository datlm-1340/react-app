import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import PostList from '../../../components/admin/Post/PostList'
import posts from '../../../redux/admin/posts'

const store = createStore(posts, applyMiddleware(thunk));

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render (
    <Provider store={store}>
      <PostList />
    </Provider>,
    document.getElementById('content')
  )
})
