/* eslint class-methods-use-this:
["error", { "exceptMethods": ["getAll", "getById", "save", "update", "delete"] }] */

class BaseService {
  constructor(entity) {
    this.entity = entity;
  }

  getAll() {
    return this.entity.find({}, (err, result) => {
      if (err) {
        return Promise.reject({ status: false, error: 'Something went wrong' });
      }
      return Promise.resolve(result);
    });
  }

  getById(id) {
    return this.entity.findById(id, (err, result) => {
      if (err) {
        return Promise.reject({ status: false, error: 'Something went wrong' });
      }
      return Promise.resolve(result);
    });
  }

  save(entityToAdd) {
    const newEntity = new this.entity(entityToAdd);
    return newEntity.save((err, result) => {
      if (err) {
        return Promise.reject({ status: false, error: 'Something went wrong' });
      }
      return Promise.resolve(result);
    });
  }

  update(entity) {
    return entity.save((err, updatedEntity) => {
      if (err) {
        return Promise.reject({ status: false, error: 'Status not updated' });
      }
      return Promise.resolve(updatedEntity);
    });
  }

  delete(id) {
    return this.entity.remove({ _id: id }, (err) => {
      if (err) {
        return Promise.reject({ status: false, error: 'Deleting todo is not successfull' });
      }
      return Promise.resolve();
    });
  }
}

export default BaseService;
