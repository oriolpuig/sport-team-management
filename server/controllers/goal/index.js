/* eslint class-methods-use-this:
["error", { "exceptMethods": ["getAll", "getById", "save", "update", "delete"] }] */
import { GoalService } from '../../services';

class SquadCtrl {
  getAll(req, res) {
    const goalService = new GoalService();
    goalService.getAll()
      .then(goals => res.json(goals))
      .catch(error => res.json(error));
  }

  getById(req, res) {
    const goalService = new GoalService();
    const id = req.params.id;
    goalService.getById(id)
      .then(goal => res.json(goal))
      .catch(error => res.json(error));
  }

  save(req, res) {
    const goalService = new GoalService();
    goalService.save(req.body)
      .then(goal => res.json(goal))
      .catch(error => res.json(error));
  }

  update(req, res) {
    const goalService = new GoalService();
    const id = req.params.id;
    const goal = req.body;
    goalService.update(id, goal)
      .then(g => res.json(g))
      .catch(error => res.json(error));
  }

  delete(req, res) {
    const goalService = new GoalService();
    const id = req.params.id;
    goalService.delete(id)
      .then(result => res.json(result))
      .catch(error => res.json(error));
  }
}

export default new SquadCtrl();
