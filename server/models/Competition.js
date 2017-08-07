import mongoose from 'mongoose';

const Schemma = mongoose.Schema;

const CompetitionSchemma = Schemma({
  title: {
    type: String,
  },
  start_at: {
    type: Date,
    default: Date.now,
  },
  end_at: {
    type: Date,
  },
  num: {
    type: Number,
  },
  season_id: {
    type: Schemma.Types.ObjectId,
    ref: 'Season',
  },
  league_id: {
    type: Schemma.Types.ObjectId,
    ref: 'League',
  },
});

const CompetitionModel = mongoose.model('Competition', CompetitionSchemma);

export default CompetitionModel;
