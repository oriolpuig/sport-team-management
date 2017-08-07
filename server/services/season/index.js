/* eslint class-methods-use-this:
["error", { "exceptMethods": [ "update"] }] */

import Season from '../../models/Season';
import BaseService from '../baseService';

class SeasonService extends BaseService {
  constructor() {
    super(Season);
  }

  update(id, seasonToUpdate) {
    return super.getById(id)
      .then((season) => {
        season.title = seasonToUpdate.title;
        return super.update(season);
      })
      .then(updatedSeason => Promise.resolve(updatedSeason))
      .catch(error => Promise.reject(error));
  }
}

export default SeasonService;
