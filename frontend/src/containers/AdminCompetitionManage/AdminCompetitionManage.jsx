import { connect } from 'react-redux';
import { AdminCompetitionManage } from '../../components';
import { saveSeason } from '../../redux/modules/season';

const mapStateToProps = state => ({});

export default connect(mapStateToProps, { saveSeason })(AdminCompetitionManage);
