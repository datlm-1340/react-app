const axios = require('axios');
const types = {
  LOAD_POSTS_REQUEST: 'admin/posts/LOAD_POSTS_REQUEST',
  LOAD_POSTS_SUCCESS: 'admin/posts/LOAD_POSTS_SUCCESS',
  LOAD_POSTS_ERROR: 'admin/posts/LOAD_POSTS_FAIL',
  UPDATE: 'admin/posts/UPDATE'
}

const initialState = {
  posts: [],
  content: "No Content"
};

// Actions
export function loadPosts(dispatch) {
  return dispatch => {
    dispatch({ type: types.LOAD_POSTS_REQUEST })

    axios.get('/admin/posts.json')
      .then(function (response) {
        dispatch({ type: types.LOAD_POSTS_SUCCESS, payload: response.data })
      })
      .catch(function (error) {
        dispatch({ type: types.LOAD_POSTS_ERROR, payload: error })
      })
      .then(function () {
        console.log("Data is loaded");
      });
  }
}

export function updatePost () {
  return { type: types.UPDATE   };
}

// Reducer
export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_POSTS_SUCCESS:
      let res = action.payload;
      return {
        posts: res.posts,
        content: "Content"
      }
    case types.LOAD_POSTS_ERROR:
      console.log(action.payload);
      return {
        title: "LOAD_POSTS_ERROR"
      }
    case types.LOAD_POSTS_REQUEST:
      return state
    case types.UPDATE:
      return {
        title: state.title + "*",
        content: state.content + "*",
      }
    default:
      return state;
  }
}
