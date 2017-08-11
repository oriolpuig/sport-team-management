import { connect } from 'react-redux';
import { AdminSeasonList } from '../../components';
import { deleteSeason, getSeasons, setCurrentSeason } from '../../redux/modules/season';

const mapStateToProps = state => ({
  currentSeason: state.season.currentSeason,
  seasons: state.season.list,
});

export default connect(mapStateToProps, { deleteSeason, getSeasons, setCurrentSeason })(AdminSeasonList);
