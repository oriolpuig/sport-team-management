import React from 'react';
import { NavLink, Switch, Redirect, Route } from 'react-router-dom';
import { AdminSeasonAdd, AdminSeasonList, AdminSeasonUpdate } from '../../containers';

const AdminSeason = () => (
  <div className="wrapper wrapper-content animated fadeInRight">
    <div className="row">
      <div className="col-lg-2">
        <div className="ibox float-e-margins">
          <div className="ibox-title">
            <h5>Options</h5>
            <div className="ibox-tools">
              <a className="collapse-link">
                <i className="fa fa-chevron-up"></i>
              </a>
            </div>
          </div>
          <div className="ibox-content">
            <NavLink to="/admin/seasons/list">Seasons list</NavLink>
            <NavLink to="/admin/seasons/add">Add new</NavLink>
          </div>
        </div>
      </div>
      <div className="col-lg-10">
        <Route exact path="/admin/seasons/list" component={AdminSeasonList}></Route>
        <Route exact path="/admin/seasons/add" component={AdminSeasonAdd}></Route>
        <Route exact path="/admin/seasons/update/:seasonid" component={AdminSeasonUpdate}></Route>
        <Redirect from="/admin/seasons" to="/admin/seasons/list"></Redirect>
      </div>
    </div>
  </div>
);

export default AdminSeason;
