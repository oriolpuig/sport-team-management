import { connect } from 'react-redux';
import { AdminSeasonList } from '../../components';
import { getSeasons } from '../../redux/modules/season';

const mapStateToProps = state => ({
  seasons: state.season.list,
});

export default connect(mapStateToProps, { getSeasons })(AdminSeasonList);
