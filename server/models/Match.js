import mongoose from 'mongoose';

const Schemma = mongoose.Schema;

const MatchSchemma = Schemma({
  num: {
    type: Number,
  },
  play_at: {
    type: Date,
    default: Date.now,
  },
  home_id: {
    type: Schemma.Types.ObjectId,
    ref: 'Team',
  },
  away_id: {
    type: Schemma.Types.ObjectId,
    ref: 'Team',
  },
  score_h: {
    type: Number,
  },
  score_a: {
    type: Number,
  },
  winner_id: {
    type: Schemma.Types.ObjectId,
    ref: 'Team',
  },
  round_id: {
    type: Schemma.Types.ObjectId,
    ref: 'Round',
  },
});

const MatchModel = mongoose.model('Match', MatchSchemma);

export default MatchModel;
