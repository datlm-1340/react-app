import axios from 'axios'

const apiCall = async (method, url, params = {}) => {
  let requestBody = {
    method: method,
    url: url,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  };

  if (['POST', 'PUT', 'PATCH'].includes(method)) {
    requestBody.data = params;
  } else {
    requestBody.params = params;
  }

  try {
    const response = await axios(requestBody);
    return response.data
  } catch (err) {
    throw err;
  } finally {
    console.log(`API called to ${url}`);
  }
}

export default apiCall;
