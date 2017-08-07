/* eslint class-methods-use-this:
["error", { "exceptMethods": ["getAll", "getById", "save", "update", "delete"] }] */
import { CompetitionService } from '../../services';

class CompetitionCtrl {
  getAll(req, res) {
    const competitionService = new CompetitionService();
    competitionService.getAll()
      .then(competitions => res.json(competitions))
      .catch(error => res.json(error));
  }

  getById(req, res) {
    const competitionService = new CompetitionService();
    const id = req.params.id;
    competitionService.getById(id)
      .then(competition => res.json(competition))
      .catch(error => res.json(error));
  }

  save(req, res) {
    const competitionService = new CompetitionService();
    competitionService.save(req.body)
      .then(competition => res.json(competition))
      .catch(error => res.json(error));
  }

  update(req, res) {
    const competitionService = new CompetitionService();
    const id = req.params.id;
    const competition = req.body;
    competitionService.update(id, competition)
      .then(c => res.json(c))
      .catch(error => res.json(error));
  }

  delete(req, res) {
    const competitionService = new CompetitionService();
    const id = req.params.id;
    competitionService.delete(id)
      .then(result => res.json(result))
      .catch(error => res.json(error));
  }
}

export default new CompetitionCtrl();
