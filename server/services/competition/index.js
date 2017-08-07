/* eslint class-methods-use-this:
["error", { "exceptMethods": ["getAll", "getById", "save", "update", "delete"] }] */

import Competition from '../../models/Competition';
import BaseService from '../baseService';

class CompetitionService extends BaseService {
  constructor() {
    super(Competition);
  }

  update(id, competitionToUpdate) {
    return super.getById(id)
      .then((competition) => {
        competition.title = competitionToUpdate.title;
        competition.start_at = competitionToUpdate.start_at;
        competition.end_at = competitionToUpdate.end_at;
        competition.num = competitionToUpdate.num;
        competition.season_id = competitionToUpdate.season_id;
        competition.league_id = competitionToUpdate.league_id;
        return super.update(competition);
      })
      .then(updatedCompetition => Promise.resolve(updatedCompetition))
      .catch(error => Promise.reject(error));
  }
}

export default CompetitionService;
