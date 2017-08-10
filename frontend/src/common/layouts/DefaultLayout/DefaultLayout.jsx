import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { push, replace } from 'react-router-redux';
import { AdminLayout, LandingLayout } from '../';

const mapStateToProps = state => ({
  location: state.routing.location,
  action: state.routing.action,
});

const DefaultLayout = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={LandingLayout} />
      <Route path="/admin" component={AdminLayout} />
    </div>
  </BrowserRouter>
);

DefaultLayout.propTypes = {
  location: PropTypes.object.isRequired,
  action: PropTypes.string.isRequired,
  onPush: PropTypes.func.isRequired,
  onReplace: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {
  onPush: push,
  onReplace: replace,
})(DefaultLayout);
