import mongoose from 'mongoose';

const Schemma = mongoose.Schema;

const PlayerSchemma = Schemma({
  name: {
    type: String,
  },
});

const PlayerModel = mongoose.model('Player', PlayerSchemma);

export default PlayerModel;
