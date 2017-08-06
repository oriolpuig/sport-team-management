import mongoose from 'mongoose';
import Team from './Team';
import Player from './Player';

const Schemma = mongoose.Schema;

const SquadSchemma = Schemma({
  dorsal: {
    type: Number,
  },
  pos: {
    type: String,
  },
  team: Team,
  player: Player,
});

const SquadModel = mongoose.model('Squad', SquadSchemma);

export default SquadModel;
