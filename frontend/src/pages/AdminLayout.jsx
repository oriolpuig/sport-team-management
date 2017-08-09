import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Col, Grid, Row } from 'react-flexbox-grid';
import { AdminMenu, AdminSidebar } from '../common/components';
import { AdminDashboard, AdminSeason } from './';

const AdminLayout = ({ match }) => (
  <Grid fluid style={{ padding: 0 }}>
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
  </Grid>
);

export default AdminLayout;
