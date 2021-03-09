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
    }
  }
});

export const {
  showEditModal,
  hideEditModal
} = postsSlice.actions

export default postsSlice.reducer
