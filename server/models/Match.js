import mongoose from 'mongoose';
import Team from './Team';
import Round from './Round';

const Schemma = mongoose.Schema;

const MatchSchemma = Schemma({
  num: {
    type: Number,
  },
  play_at: {
    type: Date,
    default: Date.now,
  },
  home: Team,
  away: Team,
  score_h: {
    type: Number,
  },
  score_a: {
    type: Number,
  },
  winner: Team,
  round: Round,
});

const MatchModel = mongoose.model('Match', MatchSchemma);

export default MatchModel;
