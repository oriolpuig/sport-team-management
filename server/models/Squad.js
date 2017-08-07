import mongoose from 'mongoose';

const Schemma = mongoose.Schema;

const SquadSchemma = Schemma({
  dorsal: {
    type: Number,
  },
  pos: {
    type: String,
  },
  team_id: {
    type: Schemma.Types.ObjectId,
    ref: 'Team',
  },
  player_id: {
    type: Schemma.Types.ObjectId,
    ref: 'Player',
  },
});

const SquadModel = mongoose.model('Squad', SquadSchemma);

export default SquadModel;
