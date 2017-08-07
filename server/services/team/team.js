/* eslint class-methods-use-this:
["error", { "exceptMethods": [ "update"] }] */

import Team from '../../models/Team';
import BaseService from '../baseService';

class TeamService extends BaseService {
  constructor() {
    super(Team);
  }

  update(id, teamToUpdate) {
    return super.getById(id)
      .then((team) => {
        team.title = teamToUpdate.title;
        team.code = teamToUpdate.code;
        team.competition_ids = teamToUpdate.competition_ids;
        return super.update(team);
      })
      .then(updatedTeam => Promise.resolve(updatedTeam))
      .catch(error => Promise.reject(error));
  }
}

export default TeamService;
