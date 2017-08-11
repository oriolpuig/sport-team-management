import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { AdminCompetitionManage } from '../../containers';

const AdminCompetition = () => (
  <div className="wrapper wrapper-content animated fadeInRight">
    <div className="row">
      <div className="col-lg-12">
        <Route exact path="/admin/competitions/list" render={() => <h1>Competitions list</h1>}></Route>
        <Route exact path="/admin/competitions/add" render={() => <h1>Competitions add new</h1>}></Route>
        <Route exact path="/admin/competitions/update/:competitionid" render={() => <h1>Competitions update</h1>}></Route>
        <Route exact path="/admin/competitions/manage" component={AdminCompetitionManage}></Route>
        {/* <Route exact path="/admin/competitions/list" component={AdminSeasonList}></Route>
        <Route exact path="/admin/competitions/add" component={AdminSeasonAdd}></Route>
        <Route exact path="/admin/competitions/update/:seasonid" component={AdminSeasonUpdate}></Route>
        <Redirect from="/admin/competitions" to="/admin/competitions/list"></Redirect> */}
      </div>
    </div>
  </div>
);

export default AdminCompetition;
