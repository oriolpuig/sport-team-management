/* eslint class-methods-use-this:
["error", { "exceptMethods": [ "update"] }] */

import Match from '../../models/Match';
import BaseService from '../baseService';

class MatchService extends BaseService {
  constructor() {
    super(Match);
  }

  update(id, matchToUpdate) {
    return super.getById(id)
      .then((match) => {
        match.num = matchToUpdate.num;
        match.play_at = matchToUpdate.play_at;
        match.home_id = matchToUpdate.home_id;
        match.away_id = matchToUpdate.away_id;
        match.score_h = matchToUpdate.score_h;
        match.score_a = matchToUpdate.score_a;
        match.winner_id = matchToUpdate.winner_id;
        match.round_id = matchToUpdate.round_id;
        return super.update(match);
      })
      .then(updatedMatch => Promise.resolve(updatedMatch))
      .catch(error => Promise.reject(error));
  }
}

export default MatchService;
