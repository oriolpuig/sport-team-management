import { connect } from 'react-redux';
import { AdminSeasonUpdate } from '../../components';
import { getSeason, updateSeason } from '../../redux/modules/season';

const mapStateToProps = state => ({
  currentSeason: state.season.currentSeason,
});

export default connect(mapStateToProps, { getSeason, updateSeason })(AdminSeasonUpdate);
