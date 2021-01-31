import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {
  loadPosts,
  updatePost
} from '../../../redux/admin/posts'

function PostList() {
  const data = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPosts());
  }, []);

  return (
    <div>
      <div>
        { data.posts.map((post) =>
          <li key={post.id}>
            {post.title}
          </li>
        )}
      </div>
      <div>{data.content} </div>
      <button onClick={() => dispatch(loadPosts())}>update</button>
    </div>

  );
};

export default PostList;
