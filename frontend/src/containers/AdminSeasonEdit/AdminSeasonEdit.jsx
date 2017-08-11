import { connect } from 'react-redux';
import { AdminSeasonEdit } from '../../components';
import { getSeasons, updateSeason, saveSeason, setCurrentSeason } from '../../redux/modules/season';

const mapStateToProps = state => ({
  currentSeason: state.season.currentSeason,
});

export default connect(mapStateToProps,
  { getSeasons, updateSeason, saveSeason, setCurrentSeason }
)(AdminSeasonEdit);
