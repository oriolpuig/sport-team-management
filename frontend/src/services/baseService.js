import config from '../config';

class BaseService {
  constructor(entity) {
    this.BASE_API_URL = `${config.BASE_API_URL}`;
    this.SERVICE_API_URL = `${config.BASE_API_URL + entity}`;
  }

  checkStatus(response) {
    if (response.status >= 200 && response.status < 300) { return response; }
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }

  parseJSON(response) {
    return response.json();
  }

  parseBlob(response) {
    return response.blob();
  }

  parseBase64(file) {
    return getBase64(file);
  }
}

export default BaseService;
