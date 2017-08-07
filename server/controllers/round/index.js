/* eslint class-methods-use-this:
["error", { "exceptMethods": ["getAll", "getById", "save", "update", "delete"] }] */
import { RoundService } from '../../services';

class RoundCtrl {
  getAll(req, res) {
    const roundService = new RoundService();
    roundService.getAll()
      .then(rounds => res.json(rounds))
      .catch(error => res.json(error));
  }

  getById(req, res) {
    const roundService = new RoundService();
    const id = req.params.id;
    roundService.getById(id)
      .then(round => res.json(round))
      .catch(error => res.json(error));
  }

  save(req, res) {
    const roundService = new RoundService();
    roundService.save(req.body)
      .then(round => res.json(round))
      .catch(error => res.json(error));
  }

  update(req, res) {
    const roundService = new RoundService();
    const id = req.params.id;
    const round = req.body;
    roundService.update(id, round)
      .then(r => res.json(r))
      .catch(error => res.json(error));
  }

  delete(req, res) {
    const roundService = new RoundService();
    const id = req.params.id;
    roundService.delete(id)
      .then(result => res.json(result))
      .catch(error => res.json(error));
  }
}

export default new RoundCtrl();
