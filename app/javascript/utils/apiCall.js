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
    showLoading();

    const response = await axios(requestBody);
    return response.data
  } catch (err) {
    throw err;
  } finally {
    showLoading(false);
    console.log(`API called to ${url}`);
  }
}

const showLoading = (isLoading = true) => {
  window.isLoading = isLoading;

  document.getElementById('loader')
    .style.display = isLoading ? 'block' : 'none';
}

export default apiCall;
