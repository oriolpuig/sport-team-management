import React from 'react';
import { connect } from 'react-redux';
import { Switch, Redirect, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Col, Grid, Row } from 'react-flexbox-grid';
import { AdminFooter, AdminMenu, AdminPageHeader, AdminSidebar } from '../../components';
import { AdminDashboard, AdminSeason } from '../../../pages';

const AdminLayout = ({ match }) => (
  // <div className="fixed-sidebar fixed-nav fixed-nav-basic">
    <div id="wrapper">
      {/* <Progress /> */}
      <AdminSidebar location={window.location} />
      <div id="page-wrapper" className={`gray-bg`}>
        <AdminMenu />
        <AdminPageHeader location={window.location} />
        <Route path="/admin/dashboard" component={AdminDashboard} />
        <Route path="/admin/seasons" component={AdminSeason} />
        <Redirect from="/admin" to="/admin/dashboard" />
        <AdminFooter />
      </div>
    </div>
  // </div>
);

const mapStateToProps = state => ({
  location: state.routing.location,
  action: state.routing.action,
});

export default connect(mapStateToProps, {})(AdminLayout);
