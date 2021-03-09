import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getPostsAPI } from '../../../services/adminServices'

export const getPosts = createAsyncThunk(
  'admin/getPosts',
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
      state.posts = posts;
    },
    [getPosts.rejected]: (state, action) => {
      console.log(1);
      console.log(action.error);
    },
  }
});

export default postsSlice.reducer
