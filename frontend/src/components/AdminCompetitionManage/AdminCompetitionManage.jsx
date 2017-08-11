import React from 'react';
import { AdminLeagueList, AdminSeasonList, AdminSeasonEdit } from '../../containers';

const AdminCompetitionManage = () => (
  <div className="wrapper wrapper-content animated fadeInRight">
    <div className="row">
      <div className="col-lg-6">
        <AdminSeasonList />
      </div>
      <div className="col-lg-6">
        <AdminSeasonEdit />
      </div>
      <div className="col-lg-6">
        <AdminLeagueList />
      </div>
      <div className="col-lg-6">
        <AdminSeasonEdit />
      </div>
    </div>
  </div>
);

export default AdminCompetitionManage;
