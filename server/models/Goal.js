import mongoose from 'mongoose';
import Player from './Player';
import Match from './Match';

const Schemma = mongoose.Schema;

const GoalSchemma = Schemma({
  minute: {
    type: Number,
  },
  penaly: {
    type: Boolean,
    defaul: false,
  },
  player: Player,
  match: Match,
});

const GoalModel = mongoose.model('Goal', GoalSchemma);

export default GoalModel;
