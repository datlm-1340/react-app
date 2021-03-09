import apiCall from '../utils/apiCall'

const adminServices = {
  async getPostsAPI(params) {
    return await apiCall('GET', '/admin/posts', params);
  },
  async createPostAPI(params) {
    return await apiCall('POST', '/posts', params);
  },
  async updatePostAPI(params) {
    return await apiCall('POST', '/posts', params);
  },
  async deletePostAPI(params) {
    return await apiCall('POST', '/posts', params);
  }
};

export const {
  getPostsAPI,
} = adminServices
