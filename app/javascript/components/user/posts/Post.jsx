import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchPosts
} from './postsSlice'

const PostList = (posts) => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.postReducer);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <React.Fragment>
      {state.posts.map(post => (
        <div className="card">
          <h2>{post.title}</h2>
          <h5>{post.created_at}</h5>
          <div className="fakeimg" style={{height: 200+'px'}}>Image</div>

          <p>{post.content}</p>
        </div>
      ))}
    </React.Fragment>
  )
}

export default PostList;
