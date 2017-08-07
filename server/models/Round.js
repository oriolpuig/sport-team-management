import mongoose from 'mongoose';

const Schemma = mongoose.Schema;

const RoundSchemma = Schemma({
  num: {
    type: Number,
  },
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
  competition_id: {
    type: Schemma.Types.ObjectId,
    ref: 'Competition',
  },
});

const RoundModel = mongoose.model('Round', RoundSchemma);

export default RoundModel;
