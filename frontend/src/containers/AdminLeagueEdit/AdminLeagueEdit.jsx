import { connect } from 'react-redux';
import { AdminLeagueEdit } from '../../components';
import { getLeagues, updateLeague, saveLeague, setCurrentLeague } from '../../redux/modules/league';

const mapStateToProps = state => ({
  currentLeague: state.league.currentLeague,
});

export default connect(mapStateToProps,
  { getLeagues, updateLeague, saveLeague, setCurrentLeague }
)(AdminLeagueEdit);
