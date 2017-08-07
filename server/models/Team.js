import mongoose from 'mongoose';

const Schemma = mongoose.Schema;

const TeamSchemma = Schemma({
  title: {
    type: String,
  },
  code: {
    type: String,
  },
  competition_id: {
    type: Schemma.Types.ObjectId,
    ref: 'Competition',
  },
});

const TeamModel = mongoose.model('Team', TeamSchemma);

export default TeamModel;
