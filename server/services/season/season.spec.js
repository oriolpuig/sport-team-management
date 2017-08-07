import should from 'should';
import sinon from 'sinon';

import 'sinon-mongoose';

import SeasonModel from '../../models/Season';
import SeasonService from './index';

describe('SeasonService testing', () => {
  describe('Get all Seasons test', () => {
    it('Should call find once', (done) => {
      const SeasonMock = sinon.mock(SeasonModel);
      SeasonMock
        .expects('find')
        .yields(null, 'SEASONS');

      SeasonModel.find((err, result) => {
        SeasonMock.verify();
        SeasonMock.restore();
        should.equal('SEASONS', result, 'Test fails due to unexpected result');
        done();
      });
    });
  });
});
