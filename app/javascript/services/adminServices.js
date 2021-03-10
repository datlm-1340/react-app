import apiCall from '../utils/apiCall'

const adminServices = {
  async getPostsAPI(params) {
    return await apiCall('GET', '/admin/posts', params);
  },
  async createPostAPI(params) {
    return await apiCall('POST', '/posts', params);
  },
  async updatePostAPI(params) {
    return await apiCall('PUT', `/posts/${params.id}`, params);
  },
  async deletePostAPI(params) {
    return await apiCall('POST', '/posts', params);
  }
};

export const {
  getPostsAPI,
  updatePostAPI
} = adminServices
