/* eslint class-methods-use-this:
["error", { "exceptMethods": ["getAll", "getById", "save", "update", "delete"] }] */
import { LeagueService } from '../../services';

class LeagueCtrl {
  getAll(req, res) {
    const leagueService = new LeagueService();
    leagueService.getAll()
      .then(leagues => res.json(leagues))
      .catch(error => res.json(error));
  }

  getById(req, res) {
    const leagueService = new LeagueService();
    const id = req.params.id;
    leagueService.getById(id)
      .then(league => res.json(league))
      .catch(error => res.json(error));
  }

  save(req, res) {
    const leagueService = new LeagueService();
    leagueService.save(req.body)
      .then(league => res.json(league))
      .catch(error => res.json(error));
  }

  update(req, res) {
    const leagueService = new LeagueService();
    const id = req.params.id;
    const league = req.body;
    leagueService.update(id, league)
      .then(l => res.json(l))
      .catch(error => res.json(error));
  }

  delete(req, res) {
    const leagueService = new LeagueService();
    const id = req.params.id;
    leagueService.delete(id)
      .then(result => res.json(result))
      .catch(error => res.json(error));
  }
}

export default new LeagueCtrl();
