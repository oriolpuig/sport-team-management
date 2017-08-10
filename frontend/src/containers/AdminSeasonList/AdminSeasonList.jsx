import { connect } from 'react-redux';
import { AdminSeasonList } from '../../components';
import { deleteSeason, getSeasons } from '../../redux/modules/season';

const mapStateToProps = state => ({
  seasons: state.season.list,
});

export default connect(mapStateToProps, { deleteSeason, getSeasons })(AdminSeasonList);
