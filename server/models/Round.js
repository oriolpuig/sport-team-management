import mongoose from 'mongoose';
import Competition from './Competition';

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
  competition: Competition,
});

const RoundModel = mongoose.model('Round', RoundSchemma);

export default RoundModel;
