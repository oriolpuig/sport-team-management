import mongoose from 'mongoose';

const Schemma = mongoose.Schema;

const SeasonSchemma = Schemma({
  title: {
    type: String,
  },
});

const SeasonModel = mongoose.model('Season', SeasonSchemma);

export default SeasonModel;
