/* eslint class-methods-use-this:
["error", { "exceptMethods": ["getAll", "getById", "save", "update", "delete"] }] */

import Season from '../../models/Season';

class SeasonService {
  getAll() {
    return Season.find({}, (err, seasons) => {
      if (err) {
        return Promise.reject({ status: false, error: 'Something went wrong' });
      }
      return Promise.resolve({ status: true, seasons });
    });
  }

  getById(id) {
    return Season.findById(id, (err, season) => {
      if (err) {
        return Promise.reject({ status: false, error: 'Something went wrong' });
      }
      return Promise.resolve({ status: true, season });
    });
  }

  save(seasonToAdd) {
    const newSeason = new Season(seasonToAdd);
    return newSeason.save((err, season) => {
      if (err) {
        return Promise.reject({ status: false, error: 'Something went wrong' });
      }
      return Promise.resolve({ status: true, season });
    });
  }

  update(id, seasonToUpdate) {
    return Season.findById(id, (err, season) => {
      if (err) {
        return Promise.reject({ status: false, error: 'Something went wrong' });
      }
      season.title = seasonToUpdate.title;

      season.save((error, updatedSeason) => {
        if (err) {
          return Promise.reject({ status: false, error: 'Status not updated' });
        }
        return Promise.resolve({ status: true, season: updatedSeason });
      });
    });
  }

  delete(id) {
    return Season.remove({ _id: id }, (err) => {
      if (err) {
        return Promise.reject({ status: false, error: 'Deleting todo is not successfull' });
      }
      return Promise.resolve({ status: true, message: 'Todo deleted successfully!!' });
    });
  }
}

export default SeasonService;
