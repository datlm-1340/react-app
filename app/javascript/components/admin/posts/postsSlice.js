import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getPostsAPI, updatePostAPI } from '../../../services/adminServices'

export const getPosts = createAsyncThunk(
  'admin/getPosts',
  async (params) => {
    return await getPostsAPI(params);
  }
);

export const updatePost = createAsyncThunk(
  'admin/updatePost',
  async (params) => {
    return await updatePostAPI(params);
  }
);

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    limit: 5,
    page: 1,
    modalEdit: {
      isVisible: false,
      post: {}
    }
  },
  reducers: {
    // only use for demonstration, should use useState() to update this kind of local state
    showEditModal(state, action) {
      state.modalEdit.isVisible = true;
      state.modalEdit.post = action.payload
    },
    hideEditModal(state, action) {
      state.modalEdit.isVisible = false;
    }
  },
  extraReducers: {
    [getPosts.fulfilled]: (state, action) => {
      const {posts, is_truncated} = action.payload;
      state.posts = posts;
    },
    [updatePost.fulfilled]: (state, action) => {
      console.log(action);
    },
    [updatePost.rejected]: (state, action) => {
      console.log(action);
    }
  }
});

export const {
  showEditModal,
  hideEditModal
} = postsSlice.actions

export default postsSlice.reducer
