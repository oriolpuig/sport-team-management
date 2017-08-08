import { connect } from 'react-redux';
import { push, replace } from 'react-router-redux';
import App from '../components';

const mapStateToProps = state => ({
  location: state.routing.location,
  action: state.routing.action,
});

export default connect(mapStateToProps, {
  onPush: push,
  onReplace: replace,
})(App);
