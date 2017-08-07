/* eslint class-methods-use-this:
["error", { "exceptMethods": [ "update"] }] */

import Player from '../../models/Player';
import BaseService from '../baseService';

class PlayerService extends BaseService {
  constructor() {
    super(Player);
  }

  update(id, playerToUpdate) {
    return super.getById(id)
      .then((player) => {
        player.name = playerToUpdate.name;
        return super.update(player);
      })
      .then(updatedTeam => Promise.resolve(updatedTeam))
      .catch(error => Promise.reject(error));
  }
}

export default PlayerService;
