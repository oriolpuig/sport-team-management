/* eslint class-methods-use-this:
["error", { "exceptMethods": ["getAll", "getById", "save", "update", "delete"] }] */
import { MatchService } from '../../services';

class MatchCtrl {
  getAll(req, res) {
    const matchService = new MatchService();
    matchService.getAll()
      .then(matches => res.json(matches))
      .catch(error => res.json(error));
  }

  getById(req, res) {
    const matchService = new MatchService();
    const id = req.params.id;
    matchService.getById(id)
      .then(match => res.json(match))
      .catch(error => res.json(error));
  }

  save(req, res) {
    const matchService = new MatchService();
    matchService.save(req.body)
      .then(match => res.json(match))
      .catch(error => res.json(error));
  }

  update(req, res) {
    const matchService = new MatchService();
    const id = req.params.id;
    const match = req.body;
    matchService.update(id, match)
      .then(m => res.json(m))
      .catch(error => res.json(error));
  }

  delete(req, res) {
    const matchService = new MatchService();
    const id = req.params.id;
    matchService.delete(id)
      .then(result => res.json(result))
      .catch(error => res.json(error));
  }
}

export default new MatchCtrl();
