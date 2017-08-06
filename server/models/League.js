import mongoose from 'mongoose';

const Schemma = mongoose.Schema;

const LeagueSchemma = Schemma({
  title: {
    type: String,
  },
});

const LeagueModel = mongoose.model('League', LeagueSchemma);

export default LeagueModel;
