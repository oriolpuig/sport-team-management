import mongoose from 'mongoose';
import League from './League';
import Season from './Season';

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
  season: Season,
  league: League,
});

const CompetitionModel = mongoose.model('Competition', CompetitionSchemma);

export default CompetitionModel;
