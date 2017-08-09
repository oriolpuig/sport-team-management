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


// const AdminLayout = ({ match }) => (
//   <Grid fluid style={{ padding: 0 }}>
//     <Row>
//       <Col xs={12}>
//         <AdminMenu />
//       </Col>
//     </Row>
//     <Row>
//       <Col xs={4}>
//         {/* <AdminSidebar match={match} /> */}
//         <sidebar>
//           {/* <ul className="nav nav-pills">
//             <li><NavLink to="/admin">Dashboard</NavLink></li>
//             <li><NavLink to={'/season'}>Season</NavLink></li>
//           </ul> */}
//           <ul>
//             <li>
//               <NavLink to="/admin/season">
//                 Props v. State
//               </NavLink>
//             </li>
//           </ul>
//         </sidebar>
//       </Col>
//       <Col xs={8}>
//         {/* <Route path={`${match.url}/dashboard`} component={AdminDashboard} />
//         <Route path={'/season'} component={AdminSeason} />
//         <Route exact path={match.url} component={AdminDashboard} /> */}
//         {/* <Route path={`${match.url}/season`} component={AdminSeason} />
//         <Route
//           exact
//           path={match.url}
//           component={AdminDashboard}
//         /> */}
//         <Route component={AdminDashboard} />
//         <Switch>
//           <Route exact path="/admin/dashboard" component={AdminDashboard} />
//           <Route
//             exact
//             path="/admin/season"
//             component={AdminSeason}
//           />
//         </Switch>
//       </Col>
//     </Row>
//   </Grid>
// );

export default AdminLayout;
