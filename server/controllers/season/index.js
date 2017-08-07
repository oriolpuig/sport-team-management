/* eslint class-methods-use-this:
["error", { "exceptMethods": ["getAll", "getById", "save", "update", "delete"] }] */
import SeasonService from '../../services';

class SeasonCtrl {
  getAll(req, res) {
    const seasonService = new SeasonService();
    seasonService.getAll()
      .then(seasons => res.json(seasons))
      .catch(error => res.json(error));
  }

  getById(req, res) {
    const seasonService = new SeasonService();
    const id = req.params.id;
    seasonService.getById(id)
      .then(season => res.json(season))
      .catch(error => res.json(error));
  }

  save(req, res) {
    const seasonService = new SeasonService();
    seasonService.save(req.body)
      .then(season => res.json(season))
      .catch(error => res.json(error));
  }

  update(req, res) {
    const seasonService = new SeasonService();
    const id = req.params.id;
    const season = req.body;
    seasonService.update(id, season)
      .then(s => res.json(s))
      .catch(error => res.json(error));
  }

  delete(req, res) {
    const seasonService = new SeasonService();
    const id = req.params.id;
    seasonService.delete(id)
      .then(result => res.json(result))
      .catch(error => res.json(error));
  }
}

export default new SeasonCtrl();
