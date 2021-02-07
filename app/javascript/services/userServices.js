import apiCall from '../util/apiCall'

const userServices = {
  async getPosts(params) {
    return await apiCall('GET', '/posts', params);
  }
};

export const {
  getPosts
} = userServices
