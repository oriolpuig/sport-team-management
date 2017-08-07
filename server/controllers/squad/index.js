/* eslint class-methods-use-this:
["error", { "exceptMethods": ["getAll", "getById", "save", "update", "delete"] }] */
import { SquadService } from '../../services';

class SquadCtrl {
  getAll(req, res) {
    const squadService = new SquadService();
    squadService.getAll()
      .then(squads => res.json(squads))
      .catch(error => res.json(error));
  }

  getById(req, res) {
    const squadService = new SquadService();
    const id = req.params.id;
    squadService.getById(id)
      .then(squad => res.json(squad))
      .catch(error => res.json(error));
  }

  save(req, res) {
    const squadService = new SquadService();
    squadService.save(req.body)
      .then(squad => res.json(squad))
      .catch(error => res.json(error));
  }

  update(req, res) {
    const squadService = new SquadService();
    const id = req.params.id;
    const squad = req.body;
    squadService.update(id, squad)
      .then(s => res.json(s))
      .catch(error => res.json(error));
  }

  delete(req, res) {
    const squadService = new SquadService();
    const id = req.params.id;
    squadService.delete(id)
      .then(result => res.json(result))
      .catch(error => res.json(error));
  }
}

export default new SquadCtrl();
