/* eslint class-methods-use-this:
["error", { "exceptMethods": [ "update"] }] */

import Goal from '../../models/Goal';
import BaseService from '../baseService';

class GoalService extends BaseService {
  constructor() {
    super(Goal);
  }

  update(id, goalToUpdate) {
    return super.getById(id)
      .then((goal) => {
        goal.dorsal = goalToUpdate.dorsal;
        goal.pos = goalToUpdate.pos;
        goal.team_id = goalToUpdate.team_id;
        goal.player_id = goalToUpdate.player_id;
        return super.update(goal);
      })
      .then(updatedGoal => Promise.resolve(updatedGoal))
      .catch(error => Promise.reject(error));
  }
}

export default GoalService;
