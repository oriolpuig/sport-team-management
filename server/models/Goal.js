import mongoose from 'mongoose';

const Schemma = mongoose.Schema;

const GoalSchemma = Schemma({
  minute: {
    type: Number,
  },
  penaly: {
    type: Boolean,
    defaul: false,
  },
  player_id: {
    type: Schemma.Types.ObjectId,
    ref: 'Player',
  },
  match_id: {
    type: Schemma.Types.ObjectId,
    ref: 'Match',
  },
});

const GoalModel = mongoose.model('Goal', GoalSchemma);

export default GoalModel;
