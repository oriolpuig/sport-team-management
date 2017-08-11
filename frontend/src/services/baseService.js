import config from '../config';

class BaseService {
  constructor(entity) {
    this.BASE_API_URL = `${config.BASE_API_URL}`;
    this.SERVICE_API_URL = `${config.BASE_API_URL + entity}/`;
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

  // CRUD methods
  getAll() {
    return fetch(this.SERVICE_API_URL, {
      headers: { 'Content-Type': 'application/json' },
      method: 'GET',
    })
      .then(this.checkStatus)
      .then(this.parseJSON)
      .then((response) => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  }

  getById(id) {
    return fetch(this.SERVICE_API_URL + id, {
      headers: { 'Content-Type': 'application/json' },
      method: 'GET',
    })
      .then(this.checkStatus)
      .then(this.parseJSON)
      .then((response) => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  }

  save(newEntity) {
    const jsonBody = JSON.stringify(newEntity);
    return fetch(this.SERVICE_API_URL, {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: jsonBody,
    })
      .then(this.checkStatus)
      .then(this.parseJSON)
      .then((response) => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  }

  update(id, entity) {
    const jsonBody = JSON.stringify(entity);
    return fetch(this.SERVICE_API_URL + id, {
      headers: { 'Content-Type': 'application/json' },
      method: 'PUT',
      body: jsonBody,
    })
      .then(this.checkStatus)
      .then(this.parseJSON)
      .then((response) => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  }

  delete(id) {
    return fetch(this.SERVICE_API_URL + id, {
      headers: { 'Content-Type': 'application/json' },
      method: 'DELETE',
    })
      .then(this.checkStatus)
      .then(this.parseJSON)
      .then((response) => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  }
}

export default BaseService;
