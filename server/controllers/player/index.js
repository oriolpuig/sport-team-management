/* eslint class-methods-use-this:
["error", { "exceptMethods": ["getAll", "getById", "save", "update", "delete"] }] */
import { PlayerService } from '../../services';

class PlayerCtrl {
  getAll(req, res) {
    const playerService = new PlayerService();
    playerService.getAll()
      .then(players => res.json(players))
      .catch(error => res.json(error));
  }

  getById(req, res) {
    const playerService = new PlayerService();
    const id = req.params.id;
    playerService.getById(id)
      .then(player => res.json(player))
      .catch(error => res.json(error));
  }

  save(req, res) {
    const playerService = new PlayerService();
    playerService.save(req.body)
      .then(player => res.json(player))
      .catch(error => res.json(error));
  }

  update(req, res) {
    const playerService = new PlayerService();
    const id = req.params.id;
    const player = req.body;
    playerService.update(id, player)
      .then(p => res.json(p))
      .catch(error => res.json(error));
  }

  delete(req, res) {
    const playerService = new PlayerService();
    const id = req.params.id;
    playerService.delete(id)
      .then(result => res.json(result))
      .catch(error => res.json(error));
  }
}

export default new PlayerCtrl();
