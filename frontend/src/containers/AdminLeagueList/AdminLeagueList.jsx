import { connect } from 'react-redux';
import { AdminLeagueList } from '../../components';
import { deleteLeague, getLeagues, setCurrentLeague } from '../../redux/modules/league';

const mapStateToProps = state => ({
  currentLeague: state.league.currentLeague,
  leagues: state.league.list,
});

export default connect(mapStateToProps, { deleteLeague, getLeagues, setCurrentLeague })(AdminLeagueList);
