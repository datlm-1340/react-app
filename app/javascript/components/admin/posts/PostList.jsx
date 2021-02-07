import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getPosts
} from './postsSlice'
import Post from './Post';

const PostList = ({posts}) => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.postReducer);

  const loadMore = () => {
    dispatch(
      getPosts({
        limit: state.limit,
        page: state.page
      })
    )
  };

  useEffect(() => {
    loadMore();
  }, []);

  return (
    <React.Fragment>
      {state.posts.map(post => (
        <Post
          post={post}
          key={post.id}
        />
      ))}

      {!state.is_truncated &&
        <button
          className="load-more-btn"
          onClick={() => loadMore()} >
          More
        </button>
      }

    </React.Fragment>
  )
};

export default PostList;
