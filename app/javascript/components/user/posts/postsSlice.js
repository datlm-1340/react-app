import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getPostsAPI } from '../../../services/userServices'

export const getPosts = createAsyncThunk(
  'users/getPosts',
  async (params) => {
    const response = await getPostsAPI(params);
    return response;
  }
);

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    limit: 5,
    page: 1
  },
  reducers: {},
  extraReducers: {
    [getPosts.fulfilled]: (state, action) => {
      const {posts, is_truncated} = action.payload;
      state.posts = state.posts.concat(posts);
      state.is_truncated = is_truncated;
      state.page++;
    },
  }
});

export default postsSlice.reducer
