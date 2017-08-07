/* eslint class-methods-use-this:
["error", { "exceptMethods": [ "update"] }] */

import Round from '../../models/Round';
import BaseService from '../baseService';

class RoundService extends BaseService {
  constructor() {
    super(Round);
  }

  update(id, roundToUpdate) {
    return super.getById(id)
      .then((round) => {
        round.num = roundToUpdate.num;
        round.title = roundToUpdate.title;
        round.start_at = roundToUpdate.start_at;
        round.end_at = roundToUpdate.end_at;
        round.competition_id = roundToUpdate.competition_id;
        return super.update(round);
      })
      .then(updatedRound => Promise.resolve(updatedRound))
      .catch(error => Promise.reject(error));
  }
}

export default RoundService;
