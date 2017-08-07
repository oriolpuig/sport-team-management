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
        goal.minute = goalToUpdate.minute;
        goal.penalty = goalToUpdate.penalty;
        goal.player_id = goalToUpdate.player_id;
        goal.match_id = goalToUpdate.match_id;
        return super.update(goal);
      })
      .then(updatedGoal => Promise.resolve(updatedGoal))
      .catch(error => Promise.reject(error));
  }
}

export default GoalService;
