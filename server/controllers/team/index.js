/* eslint class-methods-use-this:
["error", { "exceptMethods": ["getAll", "getById", "save", "update", "delete"] }] */
import { TeamService } from '../../services';

class TeamCtrl {
  getAll(req, res) {
    const teamService = new TeamService();
    teamService.getAll()
      .then(teams => res.json(teams))
      .catch(error => res.json(error));
  }

  getById(req, res) {
    const teamService = new TeamService();
    const id = req.params.id;
    teamService.getById(id)
      .then(team => res.json(team))
      .catch(error => res.json(error));
  }

  save(req, res) {
    const teamService = new TeamService();
    teamService.save(req.body)
      .then(team => res.json(team))
      .catch(error => res.json(error));
  }

  update(req, res) {
    const teamService = new TeamService();
    const id = req.params.id;
    const team = req.body;
    teamService.update(id, team)
      .then(t => res.json(t))
      .catch(error => res.json(error));
  }

  delete(req, res) {
    const teamService = new TeamService();
    const id = req.params.id;
    teamService.delete(id)
      .then(result => res.json(result))
      .catch(error => res.json(error));
  }
}

export default new TeamCtrl();
