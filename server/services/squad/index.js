/* eslint class-methods-use-this:
["error", { "exceptMethods": [ "update"] }] */

import Squad from '../../models/Squad';
import BaseService from '../baseService';

class SquadService extends BaseService {
  constructor() {
    super(Squad);
  }

  update(id, squadToUpdate) {
    return super.getById(id)
      .then((squad) => {
        squad.dorsal = squadToUpdate.dorsal;
        squad.pos = squadToUpdate.pos;
        squad.team_id = squadToUpdate.team_id;
        squad.player_id = squadToUpdate.player_id;
        return super.update(squad);
      })
      .then(updatedSquad => Promise.resolve(updatedSquad))
      .catch(error => Promise.reject(error));
  }
}

export default SquadService;
