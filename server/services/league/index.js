/* eslint class-methods-use-this:
["error", { "exceptMethods": ["getAll", "getById", "save", "update", "delete"] }] */

import League from '../../models/League';
import BaseService from '../baseService';

class LeagueService extends BaseService {
  constructor() {
    super(League);
  }

  update(id, leagueToUpdate) {
    return super.getById(id)
      .then((league) => {
        league.title = leagueToUpdate.title;
        return super.update(league);
      })
      .then(updatedLeague => Promise.resolve(updatedLeague))
      .catch(error => Promise.reject(error));
  }
}

export default LeagueService;
