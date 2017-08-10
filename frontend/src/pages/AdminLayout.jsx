import React from 'react';
import { connect } from 'react-redux';
import { Switch, Redirect, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Col, Grid, Row } from 'react-flexbox-grid';
import { AdminMenu, AdminSidebar } from '../common/components';
import { AdminDashboard, AdminSeason } from './';

const AdminLayout = (props) => (
  <div id="wrapper">
    {/* <Progress /> */}
    <AdminSidebar location={props.location} />
    <div id="page-wrapper" className={`gray-bg ${props.location.pathname}`}>
       <AdminMenu />
      <Route exact path="/admin/dashboard" component={AdminDashboard} />
      <Route exact path="/admin/seasons" component={AdminSeason} />
      <Redirect from="/admin" to="/admin/dashboard" />
      {/* <Footer /> */}
    </div>
  </div>
);

const mapStateToProps = state => ({
  location: state.routing.location,
  action: state.routing.action,
});



export default connect(mapStateToProps, {})(AdminLayout);


{/* <Grid fluid style={{ padding: 0 }}>
    <Row>
      <Col xs={12}>
        <AdminMenu />
      </Col>
    </Row>
    <Row>
      <Col xs={4}>
        <AdminSidebar match={match} />
      </Col>
      <Col xs={8}>
        <main>
          <Route exact path="/admin/dashboard" component={AdminDashboard} />
          <Route exact path="/admin/seasons" component={AdminSeason} />
          <Redirect from="/admin" to="/admin/dashboard" />
        </main>
      </Col>
    </Row>
  </Grid> */}
