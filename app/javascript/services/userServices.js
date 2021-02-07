import apiCall from '../util/apiCall'

const userServices = {
  async getPostsAPI(params) {
    return await apiCall('GET', '/posts', params);
  }
};

export const {
  getPostsAPI,
  getPostDetailAPI
} = userServices
