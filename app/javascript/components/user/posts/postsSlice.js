import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getPosts } from '../../../services/userServices'

export const fetchPosts = createAsyncThunk(
  'users/fetchPosts',
  async (params) => {
    const response = await getPosts(params);
    return response;
  }
)

const postsSlice = createSlice({
  name: 'posts',
  initialState: {posts: []},
  reducers: {},
  extraReducers: {
    [fetchPosts.fulfilled]: (state, action) => {
      const {posts, status} = action.payload;
      state.posts = posts;
    },
  }
});

export default postsSlice.reducer
