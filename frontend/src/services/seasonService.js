import BaseService from './baseService';

class SeasonService extends BaseService {
  constructor() { super('season'); }

  getSeasons() {
    return fetch(this.SERVICE_API_URL, {
      headers: { 'Content-Type': 'application/json' },
      method: 'GET',
    })
      .then(this.checkStatus)
      .then(this.parseJSON)
      .then((response) => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  }

  saveSeason(newSeason) {
    const jsonBody = JSON.stringify(newSeason);
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

}

export default SeasonService = new SeasonService();
