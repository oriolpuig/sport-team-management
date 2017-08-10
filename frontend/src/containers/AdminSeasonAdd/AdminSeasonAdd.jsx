import { connect } from 'react-redux';
import { AdminSeasonAdd } from '../../components';
import { saveSeason } from '../../redux/modules/season';

const mapStateToProps = state => ({});

export default connect(mapStateToProps, { saveSeason })(AdminSeasonAdd);
