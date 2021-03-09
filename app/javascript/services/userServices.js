import apiCall from '../utils/apiCall'

const userServices = {
  async getPostsAPI(params) {
    return await apiCall('GET', '/posts', params);
  },
  async exampleAPI(params) {
    return await apiCall('GET', '/example', params);
  }
};

export const {
  getPostsAPI,
  exampleAPI
} = userServices
