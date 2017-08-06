import mongoose from 'mongoose';
import Competition from './Competition';

const Schemma = mongoose.Schema;

const TeamSchemma = Schemma({
  title: {
    type: String,
  },
  code: {
    type: String,
  },
  competitions: [Competition],
});

const TeamModel = mongoose.model('Team', TeamSchemma);

export default TeamModel;
